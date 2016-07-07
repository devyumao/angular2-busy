/**
 * @file Component: Table
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input} from '@angular/core';

import {BusyDirective, IBusyConfig} from '../../..';

@Component({
    selector: 'demo-table',
    directives: [BusyDirective],
    template: require('./table.component.html'),
    styles: [require('./table.component.less')]
})
export class TableComponent {
    @Input() loading: IBusyConfig;
}
