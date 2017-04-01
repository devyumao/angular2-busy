/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
import { Compiler, DoCheck } from '@angular/core';
import { PromiseTrackerService } from './promise-tracker.service';
export interface IBusyContext {
    message: string;
}
export declare class BusyComponent implements DoCheck {
    private tracker;
    private compiler;
    TemplateComponent: any;
    private nmf;
    wrapperClass: string;
    template: string;
    message: string;
    private lastMessage;
    constructor(tracker: PromiseTrackerService, compiler: Compiler);
    ngDoCheck(): void;
    createDynamicTemplate(): void;
    isActive(): boolean;
}
