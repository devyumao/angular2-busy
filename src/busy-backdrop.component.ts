/**
 * @file Component: BusyBackdrop
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input} from '@angular/core';

import {PromiseTrackerService} from './promise-tracker.service';

@Component({
    selector: 'ng-busy-backdrop',
    template: `
        <div class="busy-backdrop busy-backdrop-animation" [ngStyle]="{display: isActive() ? 'block' : 'none'}"></div>
    `
})
export class BusyBackdropComponent {
    constructor(private tracker: PromiseTrackerService) {
    }

    isActive() {
        return this.tracker.isActive();
    }
}
