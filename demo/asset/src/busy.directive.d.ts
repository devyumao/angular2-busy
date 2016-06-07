/**
 * @file Directive: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
import { ElementRef, OnInit, OnChanges, DynamicComponentLoader, Injector, ApplicationRef } from '@angular/core';
import { PromiseTrackerService } from './promise-tracker.service';
import { BusyService } from './busy.service';
export declare class BusyDirective implements OnInit, OnChanges {
    private elRef;
    private service;
    private tracker;
    private loader;
    private injector;
    private appRef;
    private optionsValue;
    timestamp: number;
    wrapperId: string;
    backdropWrapperId: string;
    el: HTMLElement;
    currentTemplate: string;
    backdrop: boolean;
    private templateRef;
    private backdropRef;
    constructor(elRef: ElementRef, service: BusyService, tracker: PromiseTrackerService, loader: DynamicComponentLoader, injector: Injector, appRef: ApplicationRef);
    options: any;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    loadBackdrop(): void;
    loadBusy(): void;
    createWrapper(name: any): HTMLDivElement;
    private createBusyComponentClass(template, message, wrapperClass);
}
