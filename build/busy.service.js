/**
 * @file Service: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var busy_config_1 = require("./busy-config");
var BusyService = (function () {
    function BusyService(config) {
        this.config = config || new busy_config_1.BusyConfig();
    }
    return BusyService;
}());
BusyService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
BusyService.ctorParameters = function () { return [
    { type: busy_config_1.BusyConfig, decorators: [{ type: core_1.Optional },] },
]; };
exports.BusyService = BusyService;
//# sourceMappingURL=busy.service.js.map