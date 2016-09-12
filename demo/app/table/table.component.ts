/**
 * @file Component: Table
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input} from '@angular/core';

import {IBusyConfig} from '../../..';
// import {IBusyConfig} from 'angular2-busy';

@Component({
    selector: 'demo-table',
    template: require('./table.component.html'),
    styles: [require('./table.component.less')]
})
export class TableComponent {
    @Input() loading: IBusyConfig;
}
