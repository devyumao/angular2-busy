/**
 * @file Directive: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
    Directive,
    Component,
    Input,
    ElementRef,
    DoCheck,
    DynamicComponentLoader,
    ComponentRef,
    Injector,
    ApplicationRef,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import {equals} from './util';
import {PromiseTrackerService} from './promise-tracker.service';
import {BusyService} from './busy.service';
import {IBusyConfig} from './busy-config';
import {BusyBackdropComponent} from './busy-backdrop.component';

@Directive({
    selector: '[ngBusy]',
    providers: [PromiseTrackerService]
})
export class BusyDirective implements DoCheck {
    @Input('ngBusy') options: any;
    private optionsRecord: any;
    private optionsNorm: IBusyConfig;
    timestamp: number;
    el: HTMLElement;
    template: string;
    backdrop: boolean;
    private busyRef: ComponentRef<any>;
    private backdropRef: ComponentRef<BusyBackdropComponent>;

    constructor(
        private elRef: ElementRef,
        private service: BusyService,
        private tracker: PromiseTrackerService,
        private loader: DynamicComponentLoader,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {
        this.el = elRef.nativeElement;
    }

    private normalizeOptions(options: any) {
        if (!options) {
            options = {busy: null};
        }
        else if (Array.isArray(options)) {
            options = {busy: options};
        }
        options = Object.assign({}, this.service.config, options);
        if (!Array.isArray(options.busy)) {
            options.busy = [options.busy];
        }

        return options;
    }

    dectectOptionsChange() {
        if (equals(this.optionsNorm, this.optionsRecord)) {
            return false;
        }
        this.optionsRecord = this.optionsNorm;
        return true;
    }

    // As ngOnChanges does not work on Object detection, ngDoCheck is using
    ngDoCheck() {
        let options = this.optionsNorm = this.normalizeOptions(this.options);

        if (!this.dectectOptionsChange()) {
            return;
        }

        if (this.busyRef) {
            this.busyRef.instance.message = options.message;
        }

        !equals(options.busy, this.tracker.promiseList)
            && this.tracker.reset({
                promiseList: options.busy,
                delay: options.delay,
                minDuration: options.minDuration
            });

        if (!this.busyRef
            || this.template !== options.template
            || this.backdrop !== options.backdrop
        ) {
            this.busyRef && this.busyRef.destroy();
            this.backdropRef && this.backdropRef.destroy();

            this.template = options.template;
            this.backdrop = options.backdrop;

            options.backdrop && this.loadBackdrop();

            this.loadBusy();
        }
    }

    private loadBackdrop() {
        const id = this.createWrapper('backdrop-wrapper').id;

        // XXX: https://github.com/angular/angular/issues/6223
        this.loader.loadAsRoot(BusyBackdropComponent, '#' + id, this.injector)
            .then(componentRef => {
                this.loadComponent(componentRef);
                return this.backdropRef = componentRef;
            });
    }

    private loadBusy() {
        const id = this.createWrapper('wrapper').id;

        const options = this.optionsNorm;
        const BusyComponent = this.createBusyComponentClass(options.template)

        this.loader.loadAsRoot(BusyComponent, '#' + id, this.injector)
            .then(componentRef => {
                componentRef.instance.message = options.message;
                componentRef.instance.wrapperClass = options.wrapperClass;
                this.loadComponent(componentRef);
                return this.busyRef = componentRef;
            });
    }

    private createWrapper(name: string) {
        if (!this.timestamp) {
            this.timestamp = new Date().getTime();
        }

        let wrapper = document.createElement('div');
        wrapper.id = ['busy', name, this.timestamp].join('-');
        this.el.appendChild(wrapper);

        return wrapper;
    }

    private loadComponent(ref: ComponentRef<any>) {
        (<any>this.appRef)._loadComponent(ref);
        ref.onDestroy(() => {
            (<any>this.appRef)._unloadComponent(ref);
        });
    }

    private createBusyComponentClass(template: string) {
        const inactiveStyle = style({
            opacity: 0,
            transform: 'translateY(-40px)'
        });
        const timing = '.3s ease';

        @Component({
            selector: 'ng-busy',
            template: `
                <div [class]="wrapperClass"
                     @flyInOut
                     *ngIf="isActive()">
                    ${template}
                </div>
            `,
            // TODO: provide customized animations
            animations: [
                trigger('flyInOut', [
                    transition('void => *', [
                        inactiveStyle,
                        animate(timing)
                    ]),
                    transition('* => void', [
                        animate(timing, inactiveStyle)
                    ])
                ])
            ]
        })
        class BusyComponent {
            message: string;
            wrapperClass: string;
            shown: boolean;

            constructor(private tracker: PromiseTrackerService) {
            }

            isActive() {
                return this.tracker.isActive();
            }
        }

        return BusyComponent;
    }
}
