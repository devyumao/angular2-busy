import { DoCheck } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PromiseTrackerService } from './promise-tracker.service';
export declare class BusyComponent implements DoCheck {
    private tracker;
    private sanitizer;
    message: string;
    wrapperClass: string;
    template: string;
    safeTemplate: SafeHtml;
    constructor(tracker: PromiseTrackerService, sanitizer: DomSanitizer);
    ngDoCheck(): void;
    isActive(): boolean;
}
