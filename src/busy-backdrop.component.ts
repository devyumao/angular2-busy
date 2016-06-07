/**
 * @file Component: BusyBackdrop
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'ng-busy-backdrop',
    template: `
        <div class="busy-backdrop busy-backdrop-animation" [ngStyle]="{display: isActive() ? 'block' : 'none'}"></div>
    `
})
export class BusyBackdropComponent {
    @Input() tracker;

    constructor() {
    }

    isActive() {
        return this.tracker.isActive();
    }
}
