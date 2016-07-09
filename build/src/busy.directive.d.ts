import { ElementRef, DoCheck, DynamicComponentLoader, Injector, ApplicationRef } from '@angular/core';
import { PromiseTrackerService } from './promise-tracker.service';
import { BusyService } from './busy.service';
export declare class BusyDirective implements DoCheck {
    private elRef;
    private service;
    private tracker;
    private loader;
    private injector;
    private appRef;
    options: any;
    private optionsRecord;
    private optionsNorm;
    timestamp: number;
    el: HTMLElement;
    template: string;
    backdrop: boolean;
    private busyRef;
    private backdropRef;
    constructor(elRef: ElementRef, service: BusyService, tracker: PromiseTrackerService, loader: DynamicComponentLoader, injector: Injector, appRef: ApplicationRef);
    private normalizeOptions(options);
    dectectOptionsChange(): boolean;
    ngDoCheck(): void;
    private loadBackdrop();
    private loadBusy();
    private createWrapper(name);
    private loadComponent(ref);
    private createBusyComponentClass(template);
}
