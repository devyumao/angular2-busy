"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var busy_config_1 = require('./busy-config');
var BusyService = (function () {
    function BusyService() {
        this.configValue = new busy_config_1.BusyConfig();
    }
    Object.defineProperty(BusyService.prototype, "config", {
        get: function () {
            return this.configValue;
        },
        set: function (config) {
            this.configValue = new busy_config_1.BusyConfig(config);
        },
        enumerable: true,
        configurable: true
    });
    BusyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BusyService);
    return BusyService;
}());
exports.BusyService = BusyService;
//# sourceMappingURL=busy.service.js.map