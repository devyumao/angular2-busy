/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders} from '@angular/core';
import {DynamicComponentModule} from 'angular2-dynamic-component/index';

import {BusyDirective} from './busy.directive';
import {BusyService} from './busy.service';
import {BusyBackdropComponent} from './busy-backdrop.component';
import {BusyComponent} from './busy.component';
import {BusyConfig} from './busy-config';

@NgModule({
    imports: [
        CommonModule,
        DynamicComponentModule
    ],
    declarations: [
        BusyDirective,
        BusyComponent,
        BusyBackdropComponent,
    ],
    providers: [BusyService],
    exports: [BusyDirective],
    entryComponents: [
        BusyComponent,
        BusyBackdropComponent
    ]
})
export class BusyModule {
    static forRoot(config: BusyConfig): ModuleWithProviders {
        return {
            ngModule: BusyModule,
            providers: [
                {provide: BusyConfig, useValue: config}
            ]
        };
    }
}
