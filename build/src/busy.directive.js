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
var util_1 = require('./util');
var promise_tracker_service_1 = require('./promise-tracker.service');
var busy_service_1 = require('./busy.service');
var busy_backdrop_component_1 = require('./busy-backdrop.component');
var BusyDirective = (function () {
    function BusyDirective(elRef, service, tracker, loader, injector, appRef) {
        this.elRef = elRef;
        this.service = service;
        this.tracker = tracker;
        this.loader = loader;
        this.injector = injector;
        this.appRef = appRef;
        this.el = elRef.nativeElement;
    }
    BusyDirective.prototype.normalizeOptions = function (options) {
        if (!options) {
            options = { busy: null };
        }
        else if (Array.isArray(options)) {
            options = { busy: options };
        }
        options = Object.assign({}, this.service.config, options);
        if (!Array.isArray(options.busy)) {
            options.busy = [options.busy];
        }
        return options;
    };
    BusyDirective.prototype.dectectOptionsChange = function () {
        if (util_1.equals(this.optionsNorm, this.optionsRecord)) {
            return false;
        }
        this.optionsRecord = this.optionsNorm;
        return true;
    };
    BusyDirective.prototype.ngDoCheck = function () {
        var options = this.optionsNorm = this.normalizeOptions(this.options);
        if (!this.dectectOptionsChange()) {
            return;
        }
        if (this.busyRef) {
            this.busyRef.instance.message = options.message;
        }
        !util_1.equals(options.busy, this.tracker.promiseList)
            && this.tracker.reset({
                promiseList: options.busy,
                delay: options.delay,
                minDuration: options.minDuration
            });
        if (!this.busyRef
            || this.template !== options.template
            || this.backdrop !== options.backdrop) {
            this.busyRef && this.busyRef.destroy();
            this.backdropRef && this.backdropRef.destroy();
            this.template = options.template;
            this.backdrop = options.backdrop;
            options.backdrop && this.loadBackdrop();
            this.loadBusy();
        }
    };
    BusyDirective.prototype.loadBackdrop = function () {
        var _this = this;
        var id = this.createWrapper('backdrop-wrapper').id;
        this.loader.loadAsRoot(busy_backdrop_component_1.BusyBackdropComponent, '#' + id, this.injector)
            .then(function (componentRef) {
            _this.loadComponent(componentRef);
            return _this.backdropRef = componentRef;
        });
    };
    BusyDirective.prototype.loadBusy = function () {
        var _this = this;
        var id = this.createWrapper('wrapper').id;
        var options = this.optionsNorm;
        var BusyComponent = this.createBusyComponentClass(options.template);
        this.loader.loadAsRoot(BusyComponent, '#' + id, this.injector)
            .then(function (componentRef) {
            componentRef.instance.message = options.message;
            componentRef.instance.wrapperClass = options.wrapperClass;
            _this.loadComponent(componentRef);
            return _this.busyRef = componentRef;
        });
    };
    BusyDirective.prototype.createWrapper = function (name) {
        if (!this.timestamp) {
            this.timestamp = new Date().getTime();
        }
        var wrapper = document.createElement('div');
        wrapper.id = ['busy', name, this.timestamp].join('-');
        this.el.appendChild(wrapper);
        return wrapper;
    };
    BusyDirective.prototype.loadComponent = function (ref) {
        var _this = this;
        this.appRef._loadComponent(ref);
        ref.onDestroy(function () {
            _this.appRef._unloadComponent(ref);
        });
    };
    BusyDirective.prototype.createBusyComponentClass = function (template) {
        var inactiveStyle = core_1.style({
            opacity: 0,
            transform: 'translateY(-40px)'
        });
        var timing = '.3s ease';
        var BusyComponent = (function () {
            function BusyComponent(tracker) {
                this.tracker = tracker;
            }
            BusyComponent.prototype.isActive = function () {
                return this.tracker.isActive();
            };
            BusyComponent = __decorate([
                core_1.Component({
                    selector: 'ng-busy',
                    template: "\n                <div [class]=\"wrapperClass\"\n                     @flyInOut\n                     *ngIf=\"isActive()\">\n                    " + template + "\n                </div>\n            ",
                    animations: [
                        core_1.trigger('flyInOut', [
                            core_1.transition('void => *', [
                                inactiveStyle,
                                core_1.animate(timing)
                            ]),
                            core_1.transition('* => void', [
                                core_1.animate(timing, inactiveStyle)
                            ])
                        ])
                    ]
                }), 
                __metadata('design:paramtypes', [promise_tracker_service_1.PromiseTrackerService])
            ], BusyComponent);
            return BusyComponent;
        }());
        return BusyComponent;
    };
    __decorate([
        core_1.Input('ngBusy'), 
        __metadata('design:type', Object)
    ], BusyDirective.prototype, "options", void 0);
    BusyDirective = __decorate([
        core_1.Directive({
            selector: '[ngBusy]',
            providers: [promise_tracker_service_1.PromiseTrackerService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, busy_service_1.BusyService, promise_tracker_service_1.PromiseTrackerService, core_1.DynamicComponentLoader, core_1.Injector, core_1.ApplicationRef])
    ], BusyDirective);
    return BusyDirective;
}());
exports.BusyDirective = BusyDirective;
//# sourceMappingURL=busy.directive.js.map