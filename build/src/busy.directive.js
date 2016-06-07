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
var busy_backdrop_component_1 = require('./busy-backdrop.component');
var promise_tracker_service_1 = require('./service/promise-tracker.service');
var BusyDirective = (function () {
    function BusyDirective(elRef, tracker, loader, injector, appRef) {
        this.elRef = elRef;
        this.tracker = tracker;
        this.loader = loader;
        this.injector = injector;
        this.appRef = appRef;
        this.el = elRef.nativeElement;
    }
    Object.defineProperty(BusyDirective.prototype, "options", {
        get: function () {
            return this.optionsValue;
        },
        set: function (options) {
            if (!options) {
                options = { promise: null };
            }
            else if (Array.isArray(options) || options.then) {
                options = { promise: options };
            }
            options = Object.assign({}, BusyDirective.defaults, options);
            if (!Array.isArray(options.promise)) {
                options.promise = [options.promise];
            }
            this.optionsValue = options;
        },
        enumerable: true,
        configurable: true
    });
    BusyDirective.prototype.ngOnInit = function () {
    };
    BusyDirective.prototype.ngOnChanges = function (changes) {
        var options = this.options;
        if (true) {
            this.tracker.reset({
                promiseList: options.promise,
                delay: options.delay,
                minDuration: options.minDuration
            });
        }
        if (!this.templateRef
            || this.currentTemplate !== options.template
            || this.backdrop !== options.backdrop) {
            this.templateRef && this.templateRef.destroy();
            this.backdropRef && this.backdropRef.destroy();
            this.currentTemplate = options.template;
            this.backdrop = options.backdrop;
            options.backdrop && this.loadBackdrop();
            this.loadBusy();
        }
    };
    BusyDirective.prototype.loadBackdrop = function () {
        var _this = this;
        if (!this.backdropWrapperId) {
            this.backdropWrapperId = this.createWrapper('backdrop-wrapper').id;
        }
        this.loader.loadAsRoot(busy_backdrop_component_1.BusyBackdropComponent, '#' + this.backdropWrapperId, this.injector)
            .then(function (componentRef) {
            componentRef.instance.tracker = _this.tracker;
            _this.appRef._loadComponent(componentRef);
            componentRef.onDestroy(function () {
                _this.appRef._unloadComponent(componentRef);
            });
            return _this.backdropRef = componentRef;
        });
    };
    BusyDirective.prototype.loadBusy = function () {
        var _this = this;
        if (!this.wrapperId) {
            this.wrapperId = this.createWrapper('wrapper').id;
        }
        var options = this.options;
        var BusyComponent = this.createBusyComponentClass(options.template, options.message, options.wrapperClass);
        this.loader.loadAsRoot(BusyComponent, '#' + this.wrapperId, this.injector)
            .then(function (componentRef) {
            _this.appRef._loadComponent(componentRef);
            componentRef.onDestroy(function () {
                _this.appRef._unloadComponent(componentRef);
            });
            return _this.templateRef = componentRef;
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
    BusyDirective.prototype.createBusyComponentClass = function (template, message, wrapperClass) {
        var tracker = this.tracker;
        var BusyComponent = (function () {
            function BusyComponent() {
                this.message = message;
            }
            BusyComponent.prototype.isActive = function () {
                return tracker.isActive();
            };
            BusyComponent = __decorate([
                core_1.Component({
                    selector: 'ng-busy',
                    template: '<div class="'
                        + wrapperClass
                        + '" [ngStyle]="{display: isActive() ? \'block\' : \'none\'}">'
                        + template
                        + '</div>'
                }), 
                __metadata('design:paramtypes', [])
            ], BusyComponent);
            return BusyComponent;
        }());
        return BusyComponent;
    };
    BusyDirective.defaults = {
        template: "\n            <div class=\"busy-default-wrapper\">\n                <div class=\"busy-default-sign\">\n                    <div class=\"busy-default-spinner\">\n                        <div class=\"bar1\"></div>\n                        <div class=\"bar2\"></div>\n                        <div class=\"bar3\"></div>\n                        <div class=\"bar4\"></div>\n                        <div class=\"bar5\"></div>\n                        <div class=\"bar6\"></div>\n                        <div class=\"bar7\"></div>\n                        <div class=\"bar8\"></div>\n                        <div class=\"bar9\"></div>\n                        <div class=\"bar10\"></div>\n                        <div class=\"bar11\"></div>\n                        <div class=\"bar12\"></div>\n                    </div>\n                    <div class=\"busy-default-text\">{{message}}</div>\n                </div>\n            </div>\n        ",
        delay: 0,
        minDuration: 0,
        backdrop: true,
        message: 'Please wait...',
        wrapperClass: 'busy busy-animation'
    };
    __decorate([
        core_1.Input('ngBusy'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], BusyDirective.prototype, "options", null);
    BusyDirective = __decorate([
        core_1.Directive({
            selector: '[ngBusy]',
            providers: [promise_tracker_service_1.PromiseTrackerService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, promise_tracker_service_1.PromiseTrackerService, core_1.DynamicComponentLoader, core_1.Injector, core_1.ApplicationRef])
    ], BusyDirective);
    return BusyDirective;
}());
exports.BusyDirective = BusyDirective;
//# sourceMappingURL=busy.directive.js.map