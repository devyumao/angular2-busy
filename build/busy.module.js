/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var busy_directive_1 = require("./busy.directive");
var busy_service_1 = require("./busy.service");
var busy_backdrop_component_1 = require("./busy-backdrop.component");
var busy_component_1 = require("./busy.component");
var busy_config_1 = require("./busy-config");
var BusyModule = (function () {
    function BusyModule() {
    }
    BusyModule.forRoot = function (config) {
        return {
            ngModule: BusyModule,
            providers: [
                { provide: busy_config_1.BusyConfig, useValue: config }
            ]
        };
    };
    return BusyModule;
}());
BusyModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    busy_directive_1.BusyDirective,
                    busy_component_1.BusyComponent,
                    busy_backdrop_component_1.BusyBackdropComponent,
                ],
                providers: [busy_service_1.BusyService],
                exports: [busy_directive_1.BusyDirective],
                entryComponents: [
                    busy_component_1.BusyComponent,
                    busy_backdrop_component_1.BusyBackdropComponent
                ]
            },] },
];
/** @nocollapse */
BusyModule.ctorParameters = function () { return []; };
exports.BusyModule = BusyModule;
//# sourceMappingURL=busy.module.js.map