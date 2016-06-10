/**
 * @file Directive: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
    Directive,
    Component,
    Input,
    ElementRef,
    OnInit,
    OnChanges,
    SimpleChange,
    DynamicComponentLoader,
    ComponentRef,
    Injector,
    ApplicationRef
} from '@angular/core';

import {PromiseTrackerService} from './promise-tracker.service';
import {BusyService} from './busy.service';
import {IBusyConfig} from './busy-config';
import {BusyBackdropComponent} from './busy-backdrop.component';

 @Directive({
     selector: '[ngBusy]',
     providers: [PromiseTrackerService]
 })
export class BusyDirective implements OnInit, OnChanges {
    private optionsValue: IBusyConfig;
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
        private appRef: ApplicationRef) {
        this.el = elRef.nativeElement;
    }

    @Input('ngBusy') set options(options: any) {
        if (!options) {
            options = {promise: null};
        }
        else if (Array.isArray(options) || options.then) {
            options = {promise: options};
        }
        options = Object.assign({}, this.service.config, options);
        if (!Array.isArray(options.promise)) {
            options.promise = [options.promise];
        }
        this.optionsValue = options;
    }

    get options() {
        return this.optionsValue;
    }

    ngOnInit() {
    }

    // TODO: 拆分方法
    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        let options = this.options;

        if (this.busyRef) {
            this.busyRef.instance.message = options.message;
        }

        !this.tracker.equals(options.promise)
        && this.tracker.reset({
            promiseList: options.promise,
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
        // this.loader.loadNextToLocation(BusyBackdropComponent, this.viewContainerRef)
        //     .then(componentRef => {
        //         componentRef.instance.tracker = this.tracker;
        //         return this.backdropRef = componentRef;
        //     });

        const id = this.createWrapper('backdrop-wrapper').id;

        // https://github.com/angular/angular/issues/6223
        this.loader.loadAsRoot(BusyBackdropComponent, '#' + id, this.injector)
            .then(componentRef => {
                (<any>this.appRef)._loadComponent(componentRef);
                componentRef.onDestroy(() => {
                    (<any>this.appRef)._unloadComponent(componentRef);
                });
                return this.backdropRef = componentRef;
            });
    }

    private loadBusy() {
        // this.loader.loadNextToLocation(BusyComponent, this.viewContainerRef)
        //     .then(componentRef => this.busyRef = componentRef);

        const id = this.createWrapper('wrapper').id;

        const options = this.options;
        const BusyComponent = this.createBusyComponentClass(options.template)

        this.loader.loadAsRoot(BusyComponent, '#' + id, this.injector)
            .then(componentRef => {
                componentRef.instance.message = options.message;
                componentRef.instance.wrapperClass = options.wrapperClass;
                (<any>this.appRef)._loadComponent(componentRef);
                componentRef.onDestroy(() => {
                    (<any>this.appRef)._unloadComponent(componentRef);
                });
                return this.busyRef = componentRef;
            });
    }

    private createWrapper(name) {
        if (!this.timestamp) {
            this.timestamp = new Date().getTime();
        }

        let wrapper = document.createElement('div');
        wrapper.id = ['busy', name, this.timestamp].join('-');
        this.el.appendChild(wrapper);

        return wrapper;
    }

    private createBusyComponentClass(template: string) {
        @Component({
            selector: 'ng-busy',
            template: `
                <div [class]="wrapperClass"
                     [ngStyle]="{display: isActive() ? 'block' : 'none'}">
                `
                + template
                + '</div>'
        })
        class BusyComponent {
            message: string;
            wrapperClass: string;

            constructor(private tracker: PromiseTrackerService) {
            }

            isActive() {
                return this.tracker.isActive();
            }
        }

        return BusyComponent;
    }
}
