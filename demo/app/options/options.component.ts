/**
 * @file Component: Options
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';

import {BUSY_CONFIG_DEFAULTS, IBusyConfig} from '../../..';
import {OPTIONS_TEMPLATE} from './options-template';

@Component({
    selector: 'demo-options',
    template: require('./options.component.html'),
    styles: [require('./options.component.less')]
})
export class OptionsComponent {
    templateType: string = 'default';
    data: IBusyConfig = Object.assign({}, BUSY_CONFIG_DEFAULTS);

    constructor(private http: Http) {
    }

    changeTemplate(type: string) {
        this.data.template = OPTIONS_TEMPLATE[type];
    }

    playDemo() {
        this.data.promise = this.http.get('http://httpbin.org/delay/3')
            .subscribe();

        // this.data.promise = this.http.get('http://httpbin.org/delay/3')
        //     .toPromise();
    }
}
