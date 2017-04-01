/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var promise_tracker_service_1 = require("./promise-tracker.service");
var inactiveStyle = animations_1.style({
    opacity: 0,
    transform: 'translateY(-40px)'
});
var timing = '.3s ease';
;
var BusyComponent = (function () {
    function BusyComponent(tracker, compiler) {
        this.tracker = tracker;
        this.compiler = compiler;
    }
    BusyComponent.prototype.ngDoCheck = function () {
        if (this.message === this.lastMessage) {
            return;
        }
        this.lastMessage = this.message;
        this.createDynamicTemplate();
    };
    BusyComponent.prototype.createDynamicTemplate = function () {
        var _a = this, template = _a.template, message = _a.message;
        var TemplateComponent = (function () {
            function TemplateComponent() {
                this.message = message;
            }
            return TemplateComponent;
        }());
        TemplateComponent = __decorate([
            core_1.Component({ template: template })
        ], TemplateComponent);
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            return TemplateModule;
        }());
        TemplateModule = __decorate([
            core_1.NgModule({
                declarations: [TemplateComponent],
                entryComponents: [TemplateComponent]
            })
        ], TemplateModule);
        this.TemplateComponent = TemplateComponent;
        this.nmf = this.compiler.compileModuleSync(TemplateModule);
    };
    BusyComponent.prototype.isActive = function () {
        return this.tracker.isActive();
    };
    return BusyComponent;
}());
BusyComponent = __decorate([
    core_1.Component({
        selector: 'ng-busy',
        template: "\n        <div [class]=\"wrapperClass\" *ngIf=\"isActive()\" @flyInOut>\n            <ng-container *ngComponentOutlet=\"TemplateComponent; ngModuleFactory: nmf;\"></ng-container>\n        </div>\n    ",
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.transition('void => *', [
                    inactiveStyle,
                    animations_1.animate(timing)
                ]),
                animations_1.transition('* => void', [
                    animations_1.animate(timing, inactiveStyle)
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [promise_tracker_service_1.PromiseTrackerService,
        core_1.Compiler])
], BusyComponent);
exports.BusyComponent = BusyComponent;
//# sourceMappingURL=busy.component.js.map