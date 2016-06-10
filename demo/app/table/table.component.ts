/**
 * @file Component: Table
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

import {BusyDirective, IBusyConfig} from '../../..';

@Component({
    selector: 'demo-table',
    directives: [BusyDirective],
    template: require('./table.component.html'),
    styles: [require('./table.component.less')]
})
export class TableComponent implements OnChanges {
    @Input() loading: IBusyConfig;

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    }
}
