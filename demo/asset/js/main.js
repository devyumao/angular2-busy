webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(280);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
	// document.addEventListener('DOMContentLoaded', () => bootstrap(AppComponent)); 


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(281);
	var src_1 = __webpack_require__(302);
	// import {BusyDirective} from '../..';
	var AppComponent = (function () {
	    function AppComponent(http, busyService) {
	        this.http = http;
	        this.busyService = busyService;
	        this.loading = {
	            promise: null
	        };
	        console.log('hah323232322a');
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        this.loading.promise = this.http.get('http://httpbin.org/delay/3')
	            .toPromise();
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            providers: [http_1.Http, http_1.HTTP_PROVIDERS, src_1.BusyService],
	            directives: [src_1.BusyDirective],
	            template: __webpack_require__(308),
	            styles: [__webpack_require__(309)]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http, src_1.BusyService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Busy index
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(303));
	__export(__webpack_require__(305));
	__export(__webpack_require__(306));


/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Directive: Busy
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
	var core_1 = __webpack_require__(7);
	var promise_tracker_service_1 = __webpack_require__(304);
	var busy_service_1 = __webpack_require__(305);
	var busy_backdrop_component_1 = __webpack_require__(307);
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
	            options = Object.assign({}, this.service.config, options);
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
	    // TODO: 拆分方法
	    BusyDirective.prototype.ngOnChanges = function (changes) {
	        var options = this.options;
	        // let promiseSet = new Set(options.promise);
	        // let diff = new Set(
	        //     this.tracker.promiseList.filter(item => !promiseSet.has(item))
	        // );
	        // console.debug('DIFF', diff.size);
	        // TODO: diff size
	        if (true) {
	            // TODO: 简化写法
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
	        // this.loader.loadNextToLocation(BusyBackdropComponent, this.viewContainerRef)
	        //     .then(componentRef => {
	        //         componentRef.instance.tracker = this.tracker;
	        //         return this.backdropRef = componentRef;
	        //     });
	        var _this = this;
	        if (!this.backdropWrapperId) {
	            this.backdropWrapperId = this.createWrapper('backdrop-wrapper').id;
	        }
	        // https://github.com/angular/angular/issues/6223
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
	        // this.loader.loadNextToLocation(BusyComponent, this.viewContainerRef)
	        //     .then(componentRef => this.templateRef = componentRef);
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
	                this.message = message; // TODO: public or private?
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
	        __metadata('design:paramtypes', [core_1.ElementRef, busy_service_1.BusyService, promise_tracker_service_1.PromiseTrackerService, core_1.DynamicComponentLoader, core_1.Injector, core_1.ApplicationRef])
	    ], BusyDirective);
	    return BusyDirective;
	}());
	exports.BusyDirective = BusyDirective;


/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Service: PromiseTracker
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
	var core_1 = __webpack_require__(7);
	var PromiseTrackerService = (function () {
	    function PromiseTrackerService() {
	        this.promiseList = [];
	        this.delayJustFinished = false;
	    }
	    PromiseTrackerService.prototype.reset = function (options) {
	        var _this = this;
	        this.minDuration = options.minDuration;
	        this.promiseList = [];
	        options.promiseList.forEach(function (promise) {
	            if (!promise || promise.busyFulfilled) {
	                return;
	            }
	            _this.addPromise(promise);
	        });
	        if (this.promiseList.length === 0) {
	            return;
	        }
	        this.delayJustFinished = false;
	        if (options.delay) {
	            this.delayPromise = setTimeout(function () {
	                _this.delayPromise = null;
	                _this.delayJustFinished = true;
	            }, options.delay);
	        }
	        if (options.minDuration) {
	            this.durationPromise = setTimeout(function () {
	                _this.durationPromise = null;
	            }, options.duration + (options.delay || 0));
	        }
	    };
	    PromiseTrackerService.prototype.addPromise = function (promise) {
	        var _this = this;
	        if (this.promiseList.indexOf(promise) !== -1) {
	            return;
	        }
	        this.promiseList.push(promise);
	        promise.then.call(promise, function () { return _this.finishPromise(promise); }, function () { return _this.finishPromise(promise); });
	    };
	    PromiseTrackerService.prototype.finishPromise = function (promise) {
	        Object.assign(promise, { busyFulfilled: true });
	        var index = this.promiseList.indexOf(promise);
	        if (index === -1) {
	            return;
	        }
	        this.promiseList.splice(index, 1);
	    };
	    PromiseTrackerService.prototype.isActive = function () {
	        if (this.delayPromise) {
	            return false;
	        }
	        if (!this.delayJustFinished) {
	            if (this.durationPromise) {
	                return true;
	            }
	            return this.promiseList.length > 0;
	        }
	        this.delayJustFinished = false;
	        if (this.promiseList.length === 0) {
	            this.durationPromise = null;
	        }
	        return this.promiseList.length > 0;
	    };
	    PromiseTrackerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], PromiseTrackerService);
	    return PromiseTrackerService;
	}());
	exports.PromiseTrackerService = PromiseTrackerService;


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Service: Busy
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
	var core_1 = __webpack_require__(7);
	var busy_config_1 = __webpack_require__(306);
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


/***/ },

/***/ 306:
/***/ function(module, exports) {

	/**
	 * @file Busy Config
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	var BusyConfig = (function () {
	    function BusyConfig(config) {
	        if (config === void 0) { config = {}; }
	        for (var option in exports.BUSY_CONFIG_DEFAULTS) {
	            this[option] = config[option] != null ? config[option] : exports.BUSY_CONFIG_DEFAULTS[option];
	        }
	    }
	    return BusyConfig;
	}());
	exports.BusyConfig = BusyConfig;
	exports.BUSY_CONFIG_DEFAULTS = {
	    template: "\n        <div class=\"busy-default-wrapper\">\n            <div class=\"busy-default-sign\">\n                <div class=\"busy-default-spinner\">\n                    <div class=\"bar1\"></div>\n                    <div class=\"bar2\"></div>\n                    <div class=\"bar3\"></div>\n                    <div class=\"bar4\"></div>\n                    <div class=\"bar5\"></div>\n                    <div class=\"bar6\"></div>\n                    <div class=\"bar7\"></div>\n                    <div class=\"bar8\"></div>\n                    <div class=\"bar9\"></div>\n                    <div class=\"bar10\"></div>\n                    <div class=\"bar11\"></div>\n                    <div class=\"bar12\"></div>\n                </div>\n                <div class=\"busy-default-text\">{{message}}</div>\n            </div>\n        </div>\n    ",
	    delay: 0,
	    minDuration: 0,
	    backdrop: true,
	    message: 'Please wait...',
	    wrapperClass: 'busy busy-animation'
	};


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: BusyBackdrop
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
	var core_1 = __webpack_require__(7);
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


/***/ },

/***/ 308:
/***/ function(module, exports) {

	module.exports = "<h1>Angular 2 Busy Demo</h1>\n<table class=\"table\" [ngBusy]=\"loading\">\n    <tr>\n        <th>test</th>\n    </tr>\n    <tr>\n        <td>haha</td>\n    </tr>\n</table>\n"

/***/ },

/***/ 309:
/***/ function(module, exports) {

	module.exports = "table {\n  position: relative;\n}\n"

/***/ }

});