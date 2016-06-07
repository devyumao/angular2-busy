export declare class PromiseTrackerService {
    promiseList: Array<Promise<any>>;
    delayPromise: number;
    durationPromise: number;
    delayJustFinished: boolean;
    minDuration: number;
    reset(options: any): void;
    private addPromise(promise);
    private finishPromise(promise);
    isActive(): boolean;
}
