import { ElementRef, OnInit, OnChanges, DynamicComponentLoader, Injector, ApplicationRef } from '@angular/core';
import { PromiseTrackerService } from './service/promise-tracker.service';
export declare class BusyDirective implements OnInit, OnChanges {
    private elRef;
    private tracker;
    private loader;
    private injector;
    private appRef;
    static defaults: Object;
    private optionsValue;
    timestamp: number;
    wrapperId: string;
    backdropWrapperId: string;
    el: HTMLElement;
    currentTemplate: string;
    backdrop: boolean;
    private templateRef;
    private backdropRef;
    constructor(elRef: ElementRef, tracker: PromiseTrackerService, loader: DynamicComponentLoader, injector: Injector, appRef: ApplicationRef);
    options: any;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    loadBackdrop(): void;
    loadBusy(): void;
    createWrapper(name: any): HTMLDivElement;
    private createBusyComponentClass(template, message, wrapperClass);
}
