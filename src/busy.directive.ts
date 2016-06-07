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

import {PromiseTrackerService} from './promise-tracker.service'
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
    wrapperId: string;
    backdropWrapperId: string;
    el: HTMLElement;
    currentTemplate: string;
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

        // let promiseSet = new Set(options.promise);
        // let diff = new Set(
        //     this.tracker.promiseList.filter(item => !promiseSet.has(item))
        // );
        // console.debug('DIFF', diff.size);
        // TODO: diff size
        if (true) {
            // TODO: 简化写法
            this.tracker.reset({
                promiseList: options.promise,
                delay: options.delay,
                minDuration: options.minDuration
            });
        }

        if (!this.busyRef
            || this.currentTemplate !== options.template
            || this.backdrop !== options.backdrop
        ) {
            this.busyRef && this.busyRef.destroy();
            this.backdropRef && this.backdropRef.destroy();

            this.currentTemplate = options.template;
            this.backdrop = options.backdrop;

            options.backdrop && this.loadBackdrop();

            this.loadBusy();
        }
    }

    loadBackdrop() {
        // this.loader.loadNextToLocation(BusyBackdropComponent, this.viewContainerRef)
        //     .then(componentRef => {
        //         componentRef.instance.tracker = this.tracker;
        //         return this.backdropRef = componentRef;
        //     });

        if (!this.backdropWrapperId) {
            this.backdropWrapperId = this.createWrapper('backdrop-wrapper').id;
        }

        // https://github.com/angular/angular/issues/6223
        this.loader.loadAsRoot(BusyBackdropComponent, '#' + this.backdropWrapperId, this.injector)
            .then(componentRef => {
                componentRef.instance.tracker = this.tracker;
                (<any>this.appRef)._loadComponent(componentRef);
                componentRef.onDestroy(() => {
                    (<any>this.appRef)._unloadComponent(componentRef);
                });
                return this.backdropRef = componentRef;
            });
    }

    loadBusy() {
        if (!this.wrapperId) {
            this.wrapperId = this.createWrapper('wrapper').id;
        }

        // this.loader.loadNextToLocation(BusyComponent, this.viewContainerRef)
        //     .then(componentRef => this.busyRef = componentRef);

        const options = this.options;
        const BusyComponent = this.createBusyComponentClass(
            options.template,
            options.message,
            options.wrapperClass
        )

        this.loader.loadAsRoot(BusyComponent, '#' + this.wrapperId, this.injector)
            .then(componentRef => {
                (<any>this.appRef)._loadComponent(componentRef);
                componentRef.onDestroy(() => {
                    (<any>this.appRef)._unloadComponent(componentRef);
                });
                return this.busyRef = componentRef;
            });
    }

    createWrapper(name) {
        if (!this.timestamp) {
            this.timestamp = new Date().getTime();
        }

        let wrapper = document.createElement('div');
        wrapper.id = ['busy', name, this.timestamp].join('-');
        this.el.appendChild(wrapper);

        return wrapper;
    }

    private createBusyComponentClass(template: string, message: string, wrapperClass: string) {
        let tracker = this.tracker;

        @Component({
            selector: 'ng-busy',
            template: '<div class="'
                + wrapperClass
                + '" [ngStyle]="{display: isActive() ? \'block\' : \'none\'}">'
                + template
                + '</div>'
        })
        class BusyComponent {
            message: string = message;

            isActive() {
                return tracker.isActive();
            }
        }

        return BusyComponent;
    }
}
