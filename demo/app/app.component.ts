/**
 * @file Component: App
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template: require('./app.component.html'),
    styles: [require('./app.component.less')]
})
export class AppComponent {
}
