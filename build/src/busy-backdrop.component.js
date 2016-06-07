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
var BusyBackdropComponent = (function () {
    function BusyBackdropComponent() {
    }
    BusyBackdropComponent.prototype.isActive = function () {
        return this.tracker.isActive();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BusyBackdropComponent.prototype, "tracker", void 0);
    BusyBackdropComponent = __decorate([
        core_1.Component({
            selector: 'ng-busy-backdrop',
            template: "\n        <div class=\"busy-backdrop busy-backdrop-animation\" [ngStyle]=\"{display: isActive() ? 'block' : 'none'}\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BusyBackdropComponent);
    return BusyBackdropComponent;
}());
exports.BusyBackdropComponent = BusyBackdropComponent;
//# sourceMappingURL=busy-backdrop.component.js.map