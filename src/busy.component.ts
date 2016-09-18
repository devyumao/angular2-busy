/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
    Component,
    DoCheck,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {PromiseTrackerService} from './promise-tracker.service';

const inactiveStyle = style({
    opacity: 0,
    transform: 'translateY(-40px)'
});
const timing = '.3s ease';

@Component({
    selector: 'ng-busy',
    template: `
        <div *ngIf="isActive()" [class]="wrapperClass" [innerHTML]="safeTemplate" @flyInOut>
        </div>
    `,
    animations: [
        trigger('flyInOut', [
            transition('void => *', [
                inactiveStyle,
                animate(timing)
            ]),
            transition('* => void', [
                animate(timing, inactiveStyle)
            ])
        ])
    ]
})
export class BusyComponent implements DoCheck {
    message: string;
    prevMessage: string;
    wrapperClass: string;
    template: string;
    safeTemplate: SafeHtml;

    constructor(
        private tracker: PromiseTrackerService,
        private sanitizer: DomSanitizer
    ) {
    }

    ngDoCheck() {
        if (!this.template || this.message === this.prevMessage) {
            return;
        }

        this.safeTemplate = this.sanitizer.bypassSecurityTrustHtml(
            // XXX: fake dynamic template
            this.template.replace('{{message}}', this.message)
        );

        this.prevMessage = this.message;
    }

    isActive() {
        return this.tracker.isActive();
    }
}
