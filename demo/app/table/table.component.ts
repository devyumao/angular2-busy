/**
 * @file Component: Table
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component} from '@angular/core';

import {BusyDirective} from '../../../src';
// import {BusyDirective} from '../../..';

@Component({
    selector: 'demo-table',
    directives: [BusyDirective],
    template: require('./table.component.html'),
    styles: [require('./table.component.less')]
})
export class TableComponent {
}
