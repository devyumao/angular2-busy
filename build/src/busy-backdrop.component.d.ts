import { PromiseTrackerService } from './promise-tracker.service';
export declare class BusyBackdropComponent {
    private tracker;
    constructor(tracker: PromiseTrackerService);
    isActive(): boolean;
}
