webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file main
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(39);
	core_1.enableProdMode();
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var platform_browser_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(40);
	var forms_1 = __webpack_require__(41);
	var animations_1 = __webpack_require__(47);
	var __1 = __webpack_require__(50);
	// import {BusyModule, BusyConfig} from 'angular2-busy';
	var app_component_1 = __webpack_require__(60);
	var github_corner_1 = __webpack_require__(63);
	var header_1 = __webpack_require__(67);
	var options_1 = __webpack_require__(71);
	var table_1 = __webpack_require__(76);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            http_1.HttpModule,
	            __1.BusyModule,
	            animations_1.BrowserAnimationsModule
	            // BusyModule.forRoot(new BusyConfig({
	            //     message: 'test',
	            //     backdrop: false
	            // }))
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            github_corner_1.GithubCornerComponent,
	            header_1.HeaderComponent,
	            options_1.OptionsComponent,
	            table_1.TableComponent
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v4.0.1
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(4), __webpack_require__(38), __webpack_require__(48)) :
		typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/animations/browser'], factory) :
		(factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}, global.ng.platformBrowser.animations = global.ng.platformBrowser.animations || {}),global.ng.core,global.ng.platformBrowser,global.ng.animations.browser));
	}(this, (function (exports,_angular_core,_angular_platformBrowser,_angular_animations_browser) { 'use strict';

	var __extends = (undefined && undefined.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @license Angular v4.0.1
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var AnimationRendererFactory = (function () {
	    /**
	     * @param {?} delegate
	     * @param {?} _engine
	     * @param {?} _zone
	     */
	    function AnimationRendererFactory(delegate, _engine, _zone) {
	        this.delegate = delegate;
	        this._engine = _engine;
	        this._zone = _zone;
	    }
	    /**
	     * @param {?} hostElement
	     * @param {?} type
	     * @return {?}
	     */
	    AnimationRendererFactory.prototype.createRenderer = function (hostElement, type) {
	        var _this = this;
	        var /** @type {?} */ delegate = this.delegate.createRenderer(hostElement, type);
	        if (!hostElement || !type || !type.data || !type.data['animation'])
	            return delegate;
	        var /** @type {?} */ namespaceId = type.id;
	        var /** @type {?} */ animationTriggers = (type.data['animation']);
	        animationTriggers.forEach(function (trigger) { return _this._engine.registerTrigger(trigger, namespaceify(namespaceId, trigger.name)); });
	        return new AnimationRenderer(delegate, this._engine, this._zone, namespaceId);
	    };
	    return AnimationRendererFactory;
	}());
	AnimationRendererFactory.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	AnimationRendererFactory.ctorParameters = function () { return [
	    { type: _angular_core.RendererFactory2, },
	    { type: _angular_animations_browser.ɵAnimationEngine, },
	    { type: _angular_core.NgZone, },
	]; };
	var AnimationRenderer = (function () {
	    /**
	     * @param {?} delegate
	     * @param {?} _engine
	     * @param {?} _zone
	     * @param {?} _namespaceId
	     */
	    function AnimationRenderer(delegate, _engine, _zone, _namespaceId) {
	        this.delegate = delegate;
	        this._engine = _engine;
	        this._zone = _zone;
	        this._namespaceId = _namespaceId;
	        this.destroyNode = null;
	        this._flushPromise = null;
	        this.destroyNode = this.delegate.destroyNode ? function (n) { return delegate.destroyNode(n); } : null;
	    }
	    Object.defineProperty(AnimationRenderer.prototype, "data", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.delegate.data; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @return {?}
	     */
	    AnimationRenderer.prototype.destroy = function () { this.delegate.destroy(); };
	    /**
	     * @param {?} name
	     * @param {?=} namespace
	     * @return {?}
	     */
	    AnimationRenderer.prototype.createElement = function (name, namespace) {
	        return this.delegate.createElement(name, namespace);
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    AnimationRenderer.prototype.createComment = function (value) { return this.delegate.createComment(value); };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    AnimationRenderer.prototype.createText = function (value) { return this.delegate.createText(value); };
	    /**
	     * @param {?} selectorOrNode
	     * @return {?}
	     */
	    AnimationRenderer.prototype.selectRootElement = function (selectorOrNode) {
	        return this.delegate.selectRootElement(selectorOrNode);
	    };
	    /**
	     * @param {?} node
	     * @return {?}
	     */
	    AnimationRenderer.prototype.parentNode = function (node) { return this.delegate.parentNode(node); };
	    /**
	     * @param {?} node
	     * @return {?}
	     */
	    AnimationRenderer.prototype.nextSibling = function (node) { return this.delegate.nextSibling(node); };
	    /**
	     * @param {?} el
	     * @param {?} name
	     * @param {?} value
	     * @param {?=} namespace
	     * @return {?}
	     */
	    AnimationRenderer.prototype.setAttribute = function (el, name, value, namespace) {
	        this.delegate.setAttribute(el, name, value, namespace);
	    };
	    /**
	     * @param {?} el
	     * @param {?} name
	     * @param {?=} namespace
	     * @return {?}
	     */
	    AnimationRenderer.prototype.removeAttribute = function (el, name, namespace) {
	        this.delegate.removeAttribute(el, name, namespace);
	    };
	    /**
	     * @param {?} el
	     * @param {?} name
	     * @return {?}
	     */
	    AnimationRenderer.prototype.addClass = function (el, name) { this.delegate.addClass(el, name); };
	    /**
	     * @param {?} el
	     * @param {?} name
	     * @return {?}
	     */
	    AnimationRenderer.prototype.removeClass = function (el, name) { this.delegate.removeClass(el, name); };
	    /**
	     * @param {?} el
	     * @param {?} style
	     * @param {?} value
	     * @param {?} flags
	     * @return {?}
	     */
	    AnimationRenderer.prototype.setStyle = function (el, style, value, flags) {
	        this.delegate.setStyle(el, style, value, flags);
	    };
	    /**
	     * @param {?} el
	     * @param {?} style
	     * @param {?} flags
	     * @return {?}
	     */
	    AnimationRenderer.prototype.removeStyle = function (el, style, flags) {
	        this.delegate.removeStyle(el, style, flags);
	    };
	    /**
	     * @param {?} node
	     * @param {?} value
	     * @return {?}
	     */
	    AnimationRenderer.prototype.setValue = function (node, value) { this.delegate.setValue(node, value); };
	    /**
	     * @param {?} parent
	     * @param {?} newChild
	     * @return {?}
	     */
	    AnimationRenderer.prototype.appendChild = function (parent, newChild) {
	        var _this = this;
	        this._engine.onInsert(newChild, function () { return _this.delegate.appendChild(parent, newChild); });
	        this._queueFlush();
	    };
	    /**
	     * @param {?} parent
	     * @param {?} newChild
	     * @param {?} refChild
	     * @return {?}
	     */
	    AnimationRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
	        var _this = this;
	        this._engine.onInsert(newChild, function () { return _this.delegate.insertBefore(parent, newChild, refChild); });
	        this._queueFlush();
	    };
	    /**
	     * @param {?} parent
	     * @param {?} oldChild
	     * @return {?}
	     */
	    AnimationRenderer.prototype.removeChild = function (parent, oldChild) {
	        var _this = this;
	        this._engine.onRemove(oldChild, function () {
	            // Note: if an component element has a leave animation, and the component
	            // a host leave animation, the view engine will call `removeChild` for the parent
	            // component renderer as well as for the child component renderer.
	            // Therefore, we need to check if we already removed the element.
	            if (_this.delegate.parentNode(oldChild)) {
	                _this.delegate.removeChild(parent, oldChild);
	            }
	        });
	        this._queueFlush();
	    };
	    /**
	     * @param {?} el
	     * @param {?} name
	     * @param {?} value
	     * @return {?}
	     */
	    AnimationRenderer.prototype.setProperty = function (el, name, value) {
	        if (name.charAt(0) == '@') {
	            this._engine.setProperty(el, namespaceify(this._namespaceId, name.substr(1)), value);
	            this._queueFlush();
	        }
	        else {
	            this.delegate.setProperty(el, name, value);
	        }
	    };
	    /**
	     * @param {?} target
	     * @param {?} eventName
	     * @param {?} callback
	     * @return {?}
	     */
	    AnimationRenderer.prototype.listen = function (target, eventName, callback) {
	        var _this = this;
	        if (eventName.charAt(0) == '@') {
	            var /** @type {?} */ element = resolveElementFromTarget(target);
	            var _a = parseTriggerCallbackName(eventName.substr(1)), name = _a[0], phase = _a[1];
	            return this._engine.listen(element, namespaceify(this._namespaceId, name), phase, function (event) {
	                var /** @type {?} */ e = (event);
	                if (e.triggerName) {
	                    e.triggerName = deNamespaceify(_this._namespaceId, e.triggerName);
	                }
	                _this._zone.run(function () { return callback(event); });
	            });
	        }
	        return this.delegate.listen(target, eventName, callback);
	    };
	    /**
	     * @return {?}
	     */
	    AnimationRenderer.prototype._queueFlush = function () {
	        var _this = this;
	        if (!this._flushPromise) {
	            this._zone.runOutsideAngular(function () {
	                _this._flushPromise = Promise.resolve(null).then(function () {
	                    _this._flushPromise = null;
	                    _this._engine.flush();
	                });
	            });
	        }
	    };
	    return AnimationRenderer;
	}());
	/**
	 * @param {?} target
	 * @return {?}
	 */
	function resolveElementFromTarget(target) {
	    switch (target) {
	        case 'body':
	            return document.body;
	        case 'document':
	            return document;
	        case 'window':
	            return window;
	        default:
	            return target;
	    }
	}
	/**
	 * @param {?} triggerName
	 * @return {?}
	 */
	function parseTriggerCallbackName(triggerName) {
	    var /** @type {?} */ dotIndex = triggerName.indexOf('.');
	    var /** @type {?} */ trigger = triggerName.substring(0, dotIndex);
	    var /** @type {?} */ phase = triggerName.substr(dotIndex + 1);
	    return [trigger, phase];
	}
	/**
	 * @param {?} namespaceId
	 * @param {?} value
	 * @return {?}
	 */
	function namespaceify(namespaceId, value) {
	    return namespaceId + "#" + value;
	}
	/**
	 * @param {?} namespaceId
	 * @param {?} value
	 * @return {?}
	 */
	function deNamespaceify(namespaceId, value) {
	    return value.replace(namespaceId + '#', '');
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var InjectableAnimationEngine = (function (_super) {
	    __extends(InjectableAnimationEngine, _super);
	    /**
	     * @param {?} driver
	     * @param {?} normalizer
	     */
	    function InjectableAnimationEngine(driver, normalizer) {
	        return _super.call(this, driver, normalizer) || this;
	    }
	    return InjectableAnimationEngine;
	}(_angular_animations_browser.ɵDomAnimationEngine));
	InjectableAnimationEngine.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	InjectableAnimationEngine.ctorParameters = function () { return [
	    { type: _angular_animations_browser.AnimationDriver, },
	    { type: _angular_animations_browser.ɵAnimationStyleNormalizer, },
	]; };
	/**
	 * @return {?}
	 */
	function instantiateSupportedAnimationDriver() {
	    if (_angular_animations_browser.ɵsupportsWebAnimations()) {
	        return new _angular_animations_browser.ɵWebAnimationsDriver();
	    }
	    return new _angular_animations_browser.ɵNoopAnimationDriver();
	}
	/**
	 * @return {?}
	 */
	function instantiateDefaultStyleNormalizer() {
	    return new _angular_animations_browser.ɵWebAnimationsStyleNormalizer();
	}
	/**
	 * @param {?} renderer
	 * @param {?} engine
	 * @param {?} zone
	 * @return {?}
	 */
	function instantiateRendererFactory(renderer, engine, zone) {
	    return new AnimationRendererFactory(renderer, engine, zone);
	}
	/**
	 * Separate providers from the actual module so that we can do a local modification in Google3 to
	 * include them in the BrowserModule.
	 */
	var BROWSER_ANIMATIONS_PROVIDERS = [
	    { provide: _angular_animations_browser.AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
	    { provide: _angular_animations_browser.ɵAnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
	    { provide: _angular_animations_browser.ɵAnimationEngine, useClass: InjectableAnimationEngine }, {
	        provide: _angular_core.RendererFactory2,
	        useFactory: instantiateRendererFactory,
	        deps: [_angular_platformBrowser.ɵDomRendererFactory2, _angular_animations_browser.ɵAnimationEngine, _angular_core.NgZone]
	    }
	];
	/**
	 * Separate providers from the actual module so that we can do a local modification in Google3 to
	 * include them in the BrowserTestingModule.
	 */
	var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
	    { provide: _angular_animations_browser.ɵAnimationEngine, useClass: _angular_animations_browser.ɵNoopAnimationEngine }, {
	        provide: _angular_core.RendererFactory2,
	        useFactory: instantiateRendererFactory,
	        deps: [_angular_platformBrowser.ɵDomRendererFactory2, _angular_animations_browser.ɵAnimationEngine, _angular_core.NgZone]
	    }
	];
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@experimental Animation support is experimental.
	 */
	var BrowserAnimationsModule = (function () {
	    function BrowserAnimationsModule() {
	    }
	    return BrowserAnimationsModule;
	}());
	BrowserAnimationsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                imports: [_angular_platformBrowser.BrowserModule],
	                providers: BROWSER_ANIMATIONS_PROVIDERS,
	            },] },
	];
	/**
	 * @nocollapse
	 */
	BrowserAnimationsModule.ctorParameters = function () { return []; };
	/**
	 * \@experimental Animation support is experimental.
	 */
	var NoopAnimationsModule = (function () {
	    function NoopAnimationsModule() {
	    }
	    return NoopAnimationsModule;
	}());
	NoopAnimationsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                imports: [_angular_platformBrowser.BrowserModule],
	                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NoopAnimationsModule.ctorParameters = function () { return []; };

	exports.BrowserAnimationsModule = BrowserAnimationsModule;
	exports.NoopAnimationsModule = NoopAnimationsModule;
	exports.ɵAnimationRenderer = AnimationRenderer;
	exports.ɵAnimationRendererFactory = AnimationRendererFactory;
	exports.ɵe = BROWSER_ANIMATIONS_PROVIDERS;
	exports.ɵf = BROWSER_NOOP_ANIMATIONS_PROVIDERS;
	exports.ɵa = InjectableAnimationEngine;
	exports.ɵc = instantiateDefaultStyleNormalizer;
	exports.ɵd = instantiateRendererFactory;
	exports.ɵb = instantiateSupportedAnimationDriver;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	//# sourceMappingURL=platform-browser-animations.umd.js.map


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v4.0.1
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(49)) :
		typeof define === 'function' && define.amd ? define(['exports', '@angular/animations'], factory) :
		(factory((global.ng = global.ng || {}, global.ng.animations = global.ng.animations || {}, global.ng.animations.browser = global.ng.animations.browser || {}),global.ng.animations));
	}(this, (function (exports,_angular_animations) { 'use strict';

	var __extends = (undefined && undefined.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @license Angular v4.0.1
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @experimental
	 */
	var NoopAnimationDriver = (function () {
	    function NoopAnimationDriver() {
	    }
	    NoopAnimationDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
	        if (previousPlayers === void 0) { previousPlayers = []; }
	        return new _angular_animations.NoopAnimationPlayer();
	    };
	    return NoopAnimationDriver;
	}());
	/**
	 * @experimental
	 */
	var AnimationDriver = (function () {
	    function AnimationDriver() {
	    }
	    return AnimationDriver;
	}());
	AnimationDriver.NOOP = new NoopAnimationDriver();
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @abstract
	 */
	var AnimationEngine = (function () {
	    function AnimationEngine() {
	    }
	    /**
	     * @abstract
	     * @param {?} trigger
	     * @param {?=} name
	     * @return {?}
	     */
	    AnimationEngine.prototype.registerTrigger = function (trigger, name) { };
	    /**
	     * @abstract
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    AnimationEngine.prototype.onInsert = function (element, domFn) { };
	    /**
	     * @abstract
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    AnimationEngine.prototype.onRemove = function (element, domFn) { };
	    /**
	     * @abstract
	     * @param {?} element
	     * @param {?} property
	     * @param {?} value
	     * @return {?}
	     */
	    AnimationEngine.prototype.setProperty = function (element, property, value) { };
	    /**
	     * @abstract
	     * @param {?} element
	     * @param {?} eventName
	     * @param {?} eventPhase
	     * @param {?} callback
	     * @return {?}
	     */
	    AnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) { };
	    /**
	     * @abstract
	     * @return {?}
	     */
	    AnimationEngine.prototype.flush = function () { };
	    Object.defineProperty(AnimationEngine.prototype, "activePlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () { throw new Error('...'); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AnimationEngine.prototype, "queuedPlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () { throw new Error('...'); },
	        enumerable: true,
	        configurable: true
	    });
	    return AnimationEngine;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var ONE_SECOND = 1000;
	/**
	 * @param {?} exp
	 * @param {?} errors
	 * @return {?}
	 */
	function parseTimeExpression(exp, errors) {
	    var /** @type {?} */ regex = /^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
	    var /** @type {?} */ duration;
	    var /** @type {?} */ delay = 0;
	    var /** @type {?} */ easing = null;
	    if (typeof exp === 'string') {
	        var /** @type {?} */ matches = exp.match(regex);
	        if (matches === null) {
	            errors.push("The provided timing value \"" + exp + "\" is invalid.");
	            return { duration: 0, delay: 0, easing: null };
	        }
	        var /** @type {?} */ durationMatch = parseFloat(matches[1]);
	        var /** @type {?} */ durationUnit = matches[2];
	        if (durationUnit == 's') {
	            durationMatch *= ONE_SECOND;
	        }
	        duration = Math.floor(durationMatch);
	        var /** @type {?} */ delayMatch = matches[3];
	        var /** @type {?} */ delayUnit = matches[4];
	        if (delayMatch != null) {
	            var /** @type {?} */ delayVal = parseFloat(delayMatch);
	            if (delayUnit != null && delayUnit == 's') {
	                delayVal *= ONE_SECOND;
	            }
	            delay = Math.floor(delayVal);
	        }
	        var /** @type {?} */ easingVal = matches[5];
	        if (easingVal) {
	            easing = easingVal;
	        }
	    }
	    else {
	        duration = (exp);
	    }
	    return { duration: duration, delay: delay, easing: easing };
	}
	/**
	 * @param {?} styles
	 * @return {?}
	 */
	function normalizeStyles(styles) {
	    var /** @type {?} */ normalizedStyles = {};
	    if (Array.isArray(styles)) {
	        styles.forEach(function (data) { return copyStyles(data, false, normalizedStyles); });
	    }
	    else {
	        copyStyles(styles, false, normalizedStyles);
	    }
	    return normalizedStyles;
	}
	/**
	 * @param {?} styles
	 * @param {?} readPrototype
	 * @param {?=} destination
	 * @return {?}
	 */
	function copyStyles(styles, readPrototype, destination) {
	    if (destination === void 0) { destination = {}; }
	    if (readPrototype) {
	        // we make use of a for-in loop so that the
	        // prototypically inherited properties are
	        // revealed from the backFill map
	        for (var /** @type {?} */ prop in styles) {
	            destination[prop] = styles[prop];
	        }
	    }
	    else {
	        Object.keys(styles).forEach(function (prop) { return destination[prop] = styles[prop]; });
	    }
	    return destination;
	}
	/**
	 * @param {?} element
	 * @param {?} styles
	 * @return {?}
	 */
	function setStyles(element, styles) {
	    if (element['style']) {
	        Object.keys(styles).forEach(function (prop) { return element.style[prop] = styles[prop]; });
	    }
	}
	/**
	 * @param {?} element
	 * @param {?} styles
	 * @return {?}
	 */
	function eraseStyles(element, styles) {
	    if (element['style']) {
	        Object.keys(styles).forEach(function (prop) {
	            // IE requires '' instead of null
	            // see https://github.com/angular/angular/issues/7916
	            element.style[prop] = '';
	        });
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} visitor
	 * @param {?} node
	 * @param {?} context
	 * @return {?}
	 */
	function visitAnimationNode(visitor, node, context) {
	    switch (node.type) {
	        case 0 /* State */:
	            return visitor.visitState(/** @type {?} */ (node), context);
	        case 1 /* Transition */:
	            return visitor.visitTransition(/** @type {?} */ (node), context);
	        case 2 /* Sequence */:
	            return visitor.visitSequence(/** @type {?} */ (node), context);
	        case 3 /* Group */:
	            return visitor.visitGroup(/** @type {?} */ (node), context);
	        case 4 /* Animate */:
	            return visitor.visitAnimate(/** @type {?} */ (node), context);
	        case 5 /* KeyframeSequence */:
	            return visitor.visitKeyframeSequence(/** @type {?} */ (node), context);
	        case 6 /* Style */:
	            return visitor.visitStyle(/** @type {?} */ (node), context);
	        default:
	            throw new Error("Unable to resolve animation metadata node #" + node.type);
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var ANY_STATE = '*';
	/**
	 * @param {?} transitionValue
	 * @param {?} errors
	 * @return {?}
	 */
	function parseTransitionExpr(transitionValue, errors) {
	    var /** @type {?} */ expressions = [];
	    if (typeof transitionValue == 'string') {
	        ((transitionValue))
	            .split(/\s*,\s*/)
	            .forEach(function (str) { return parseInnerTransitionStr(str, expressions, errors); });
	    }
	    else {
	        expressions.push(/** @type {?} */ (transitionValue));
	    }
	    return expressions;
	}
	/**
	 * @param {?} eventStr
	 * @param {?} expressions
	 * @param {?} errors
	 * @return {?}
	 */
	function parseInnerTransitionStr(eventStr, expressions, errors) {
	    if (eventStr[0] == ':') {
	        eventStr = parseAnimationAlias(eventStr, errors);
	    }
	    var /** @type {?} */ match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
	    if (match == null || match.length < 4) {
	        errors.push("The provided transition expression \"" + eventStr + "\" is not supported");
	        return expressions;
	    }
	    var /** @type {?} */ fromState = match[1];
	    var /** @type {?} */ separator = match[2];
	    var /** @type {?} */ toState = match[3];
	    expressions.push(makeLambdaFromStates(fromState, toState));
	    var /** @type {?} */ isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
	    if (separator[0] == '<' && !isFullAnyStateExpr) {
	        expressions.push(makeLambdaFromStates(toState, fromState));
	    }
	}
	/**
	 * @param {?} alias
	 * @param {?} errors
	 * @return {?}
	 */
	function parseAnimationAlias(alias, errors) {
	    switch (alias) {
	        case ':enter':
	            return 'void => *';
	        case ':leave':
	            return '* => void';
	        default:
	            errors.push("The transition alias value \"" + alias + "\" is not supported");
	            return '* => *';
	    }
	}
	/**
	 * @param {?} lhs
	 * @param {?} rhs
	 * @return {?}
	 */
	function makeLambdaFromStates(lhs, rhs) {
	    return function (fromState, toState) {
	        var /** @type {?} */ lhsMatch = lhs == ANY_STATE || lhs == fromState;
	        var /** @type {?} */ rhsMatch = rhs == ANY_STATE || rhs == toState;
	        return lhsMatch && rhsMatch;
	    };
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} keyframes
	 * @param {?} duration
	 * @param {?} delay
	 * @param {?} easing
	 * @return {?}
	 */
	function createTimelineInstruction(keyframes, duration, delay, easing) {
	    return {
	        type: 1 /* TimelineAnimation */,
	        keyframes: keyframes,
	        duration: duration,
	        delay: delay,
	        totalTime: duration + delay, easing: easing
	    };
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} ast
	 * @param {?=} startingStyles
	 * @param {?=} finalStyles
	 * @return {?}
	 */
	function buildAnimationKeyframes(ast, startingStyles, finalStyles) {
	    if (startingStyles === void 0) { startingStyles = {}; }
	    if (finalStyles === void 0) { finalStyles = {}; }
	    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? _angular_animations.sequence(/** @type {?} */ (ast)) : (ast);
	    return new AnimationTimelineVisitor().buildKeyframes(normalizedAst, startingStyles, finalStyles);
	}
	var AnimationTimelineContext = (function () {
	    /**
	     * @param {?} errors
	     * @param {?} timelines
	     * @param {?=} initialTimeline
	     */
	    function AnimationTimelineContext(errors, timelines, initialTimeline) {
	        if (initialTimeline === void 0) { initialTimeline = null; }
	        this.errors = errors;
	        this.timelines = timelines;
	        this.previousNode = ({});
	        this.subContextCount = 0;
	        this.currentTimeline = initialTimeline || new TimelineBuilder(0);
	        timelines.push(this.currentTimeline);
	    }
	    /**
	     * @return {?}
	     */
	    AnimationTimelineContext.prototype.createSubContext = function () {
	        var /** @type {?} */ context = new AnimationTimelineContext(this.errors, this.timelines, this.currentTimeline.fork());
	        context.previousNode = this.previousNode;
	        context.currentAnimateTimings = this.currentAnimateTimings;
	        this.subContextCount++;
	        return context;
	    };
	    /**
	     * @param {?=} newTime
	     * @return {?}
	     */
	    AnimationTimelineContext.prototype.transformIntoNewTimeline = function (newTime) {
	        if (newTime === void 0) { newTime = 0; }
	        this.currentTimeline = this.currentTimeline.fork(newTime);
	        this.timelines.push(this.currentTimeline);
	        return this.currentTimeline;
	    };
	    /**
	     * @param {?} time
	     * @return {?}
	     */
	    AnimationTimelineContext.prototype.incrementTime = function (time) {
	        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
	    };
	    return AnimationTimelineContext;
	}());
	var AnimationTimelineVisitor = (function () {
	    function AnimationTimelineVisitor() {
	    }
	    /**
	     * @param {?} ast
	     * @param {?} startingStyles
	     * @param {?} finalStyles
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.buildKeyframes = function (ast, startingStyles, finalStyles) {
	        var /** @type {?} */ context = new AnimationTimelineContext([], []);
	        context.currentTimeline.setStyles(startingStyles);
	        visitAnimationNode(this, ast, context);
	        // this checks to see if an actual animation happened
	        var /** @type {?} */ timelines = context.timelines.filter(function (timeline) { return timeline.hasStyling(); });
	        if (timelines.length && Object.keys(finalStyles).length) {
	            var /** @type {?} */ tl = timelines[timelines.length - 1];
	            if (!tl.allowOnlyTimelineStyles()) {
	                tl.setStyles(finalStyles);
	            }
	        }
	        return timelines.length ? timelines.map(function (timeline) { return timeline.buildKeyframes(); }) :
	            [createTimelineInstruction([], 0, 0, '')];
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitState = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitTransition = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitSequence = function (ast, context) {
	        var _this = this;
	        var /** @type {?} */ subContextCount = context.subContextCount;
	        if (context.previousNode.type == 6 /* Style */) {
	            context.currentTimeline.forwardFrame();
	            context.currentTimeline.snapshotCurrentStyles();
	        }
	        ast.steps.forEach(function (s) { return visitAnimationNode(_this, s, context); });
	        // this means that some animation function within the sequence
	        // ended up creating a sub timeline (which means the current
	        // timeline cannot overlap with the contents of the sequence)
	        if (context.subContextCount > subContextCount) {
	            context.transformIntoNewTimeline();
	        }
	        context.previousNode = ast;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitGroup = function (ast, context) {
	        var _this = this;
	        var /** @type {?} */ innerTimelines = [];
	        var /** @type {?} */ furthestTime = context.currentTimeline.currentTime;
	        ast.steps.forEach(function (s) {
	            var /** @type {?} */ innerContext = context.createSubContext();
	            visitAnimationNode(_this, s, innerContext);
	            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
	            innerTimelines.push(innerContext.currentTimeline);
	        });
	        // this operation is run after the AST loop because otherwise
	        // if the parent timeline's collected styles were updated then
	        // it would pass in invalid data into the new-to-be forked items
	        innerTimelines.forEach(function (timeline) { return context.currentTimeline.mergeTimelineCollectedStyles(timeline); });
	        context.transformIntoNewTimeline(furthestTime);
	        context.previousNode = ast;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitAnimate = function (ast, context) {
	        var /** @type {?} */ timings = ast.timings.hasOwnProperty('duration') ? (ast.timings) :
	            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
	        context.currentAnimateTimings = timings;
	        if (timings.delay) {
	            context.incrementTime(timings.delay);
	            context.currentTimeline.snapshotCurrentStyles();
	        }
	        var /** @type {?} */ astType = ast.styles ? ast.styles.type : -1;
	        if (astType == 5 /* KeyframeSequence */) {
	            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
	        }
	        else {
	            var /** @type {?} */ styleAst = (ast.styles);
	            if (!styleAst) {
	                var /** @type {?} */ newStyleData = {};
	                if (timings.easing) {
	                    newStyleData['easing'] = timings.easing;
	                }
	                styleAst = _angular_animations.style(newStyleData);
	                ((styleAst))['treatAsEmptyStep'] = true;
	            }
	            context.incrementTime(timings.duration);
	            if (styleAst) {
	                this.visitStyle(styleAst, context);
	            }
	        }
	        context.currentAnimateTimings = null;
	        context.previousNode = ast;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitStyle = function (ast, context) {
	        // this is a special case when a style() call is issued directly after
	        // a call to animate(). If the clock is not forwarded by one frame then
	        // the style() calls will be merged into the previous animate() call
	        // which is incorrect.
	        if (!context.currentAnimateTimings &&
	            context.previousNode.type == 4 /* Animate */) {
	            context.currentTimeline.forwardFrame();
	        }
	        var /** @type {?} */ normalizedStyles = normalizeStyles(ast.styles);
	        var /** @type {?} */ easing = context.currentAnimateTimings && context.currentAnimateTimings.easing;
	        this._applyStyles(normalizedStyles, easing, ((ast))['treatAsEmptyStep'] ? true : false, context);
	        context.previousNode = ast;
	    };
	    /**
	     * @param {?} styles
	     * @param {?} easing
	     * @param {?} treatAsEmptyStep
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype._applyStyles = function (styles, easing, treatAsEmptyStep, context) {
	        if (styles.hasOwnProperty('easing')) {
	            easing = easing || (styles['easing']);
	            delete styles['easing'];
	        }
	        context.currentTimeline.setStyles(styles, easing, treatAsEmptyStep);
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTimelineVisitor.prototype.visitKeyframeSequence = function (ast, context) {
	        var _this = this;
	        var /** @type {?} */ MAX_KEYFRAME_OFFSET = 1;
	        var /** @type {?} */ limit = ast.steps.length - 1;
	        var /** @type {?} */ firstKeyframe = ast.steps[0];
	        var /** @type {?} */ offsetGap = 0;
	        var /** @type {?} */ containsOffsets = getOffset(firstKeyframe) != null;
	        if (!containsOffsets) {
	            offsetGap = MAX_KEYFRAME_OFFSET / limit;
	        }
	        var /** @type {?} */ startTime = context.currentTimeline.duration;
	        var /** @type {?} */ duration = context.currentAnimateTimings.duration;
	        var /** @type {?} */ innerContext = context.createSubContext();
	        var /** @type {?} */ innerTimeline = innerContext.currentTimeline;
	        innerTimeline.easing = context.currentAnimateTimings.easing;
	        ast.steps.forEach(function (step, i) {
	            var /** @type {?} */ normalizedStyles = normalizeStyles(step.styles);
	            var /** @type {?} */ offset = containsOffsets ?
	                (step.offset != null ? step.offset : parseFloat(/** @type {?} */ (normalizedStyles['offset']))) :
	                (i == limit ? MAX_KEYFRAME_OFFSET : i * offsetGap);
	            innerTimeline.forwardTime(offset * duration);
	            _this._applyStyles(normalizedStyles, null, false, innerContext);
	        });
	        // this will ensure that the parent timeline gets all the styles from
	        // the child even if the new timeline below is not used
	        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
	        // we do this because the window between this timeline and the sub timeline
	        // should ensure that the styles within are exactly the same as they were before
	        context.transformIntoNewTimeline(startTime + duration);
	        context.previousNode = ast;
	    };
	    return AnimationTimelineVisitor;
	}());
	var TimelineBuilder = (function () {
	    /**
	     * @param {?} startTime
	     * @param {?=} _globalTimelineStyles
	     */
	    function TimelineBuilder(startTime, _globalTimelineStyles) {
	        if (_globalTimelineStyles === void 0) { _globalTimelineStyles = null; }
	        this.startTime = startTime;
	        this._globalTimelineStyles = _globalTimelineStyles;
	        this.duration = 0;
	        this.easing = '';
	        this._previousKeyframe = {};
	        this._keyframes = new Map();
	        this._styleSummary = {};
	        this._backFill = {};
	        this._currentEmptyStepKeyframe = null;
	        this._localTimelineStyles = Object.create(this._backFill, {});
	        if (!this._globalTimelineStyles) {
	            this._globalTimelineStyles = this._localTimelineStyles;
	        }
	        this._loadKeyframe();
	    }
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.hasStyling = function () { return this._keyframes.size > 1; };
	    Object.defineProperty(TimelineBuilder.prototype, "currentTime", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.startTime + this.duration; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?=} currentTime
	     * @return {?}
	     */
	    TimelineBuilder.prototype.fork = function (currentTime) {
	        if (currentTime === void 0) { currentTime = 0; }
	        return new TimelineBuilder(currentTime || this.currentTime, this._globalTimelineStyles);
	    };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype._loadKeyframe = function () {
	        if (this._currentKeyframe) {
	            this._previousKeyframe = this._currentKeyframe;
	        }
	        this._currentKeyframe = this._keyframes.get(this.duration);
	        if (!this._currentKeyframe) {
	            this._currentKeyframe = Object.create(this._backFill, {});
	            this._keyframes.set(this.duration, this._currentKeyframe);
	        }
	    };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.forwardFrame = function () {
	        this.duration++;
	        this._loadKeyframe();
	    };
	    /**
	     * @param {?} time
	     * @return {?}
	     */
	    TimelineBuilder.prototype.forwardTime = function (time) {
	        this.duration = time;
	        this._loadKeyframe();
	    };
	    /**
	     * @param {?} prop
	     * @param {?} value
	     * @return {?}
	     */
	    TimelineBuilder.prototype._updateStyle = function (prop, value) {
	        this._localTimelineStyles[prop] = value;
	        this._globalTimelineStyles[prop] = value;
	        this._styleSummary[prop] = { time: this.currentTime, value: value };
	    };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; };
	    /**
	     * @param {?} styles
	     * @param {?=} easing
	     * @param {?=} treatAsEmptyStep
	     * @return {?}
	     */
	    TimelineBuilder.prototype.setStyles = function (styles, easing, treatAsEmptyStep) {
	        var _this = this;
	        if (easing === void 0) { easing = null; }
	        if (treatAsEmptyStep === void 0) { treatAsEmptyStep = false; }
	        if (easing) {
	            this._previousKeyframe['easing'] = easing;
	        }
	        if (treatAsEmptyStep) {
	            // special case for animate(duration):
	            // all missing styles are filled with a `*` value then
	            // if any destination styles are filled in later on the same
	            // keyframe then they will override the overridden styles
	            // We use `_globalTimelineStyles` here because there may be
	            // styles in previous keyframes that are not present in this timeline
	            Object.keys(this._globalTimelineStyles).forEach(function (prop) {
	                _this._backFill[prop] = _this._globalTimelineStyles[prop] || _angular_animations.AUTO_STYLE;
	                _this._currentKeyframe[prop] = _angular_animations.AUTO_STYLE;
	            });
	            this._currentEmptyStepKeyframe = this._currentKeyframe;
	        }
	        else {
	            Object.keys(styles).forEach(function (prop) {
	                if (prop !== 'offset') {
	                    var /** @type {?} */ val = styles[prop];
	                    _this._currentKeyframe[prop] = val;
	                    if (!_this._localTimelineStyles[prop]) {
	                        _this._backFill[prop] = _this._globalTimelineStyles[prop] || _angular_animations.AUTO_STYLE;
	                    }
	                    _this._updateStyle(prop, val);
	                }
	            });
	            Object.keys(this._localTimelineStyles).forEach(function (prop) {
	                if (!_this._currentKeyframe.hasOwnProperty(prop)) {
	                    _this._currentKeyframe[prop] = _this._localTimelineStyles[prop];
	                }
	            });
	        }
	    };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.snapshotCurrentStyles = function () { copyStyles(this._localTimelineStyles, false, this._currentKeyframe); };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.getFinalKeyframe = function () { return this._keyframes.get(this.duration); };
	    Object.defineProperty(TimelineBuilder.prototype, "properties", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            var /** @type {?} */ properties = [];
	            for (var /** @type {?} */ prop in this._currentKeyframe) {
	                properties.push(prop);
	            }
	            return properties;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} timeline
	     * @return {?}
	     */
	    TimelineBuilder.prototype.mergeTimelineCollectedStyles = function (timeline) {
	        var _this = this;
	        Object.keys(timeline._styleSummary).forEach(function (prop) {
	            var /** @type {?} */ details0 = _this._styleSummary[prop];
	            var /** @type {?} */ details1 = timeline._styleSummary[prop];
	            if (!details0 || details1.time > details0.time) {
	                _this._updateStyle(prop, details1.value);
	            }
	        });
	    };
	    /**
	     * @return {?}
	     */
	    TimelineBuilder.prototype.buildKeyframes = function () {
	        var _this = this;
	        var /** @type {?} */ finalKeyframes = [];
	        // special case for when there are only start/destination
	        // styles but no actual animation animate steps...
	        if (this.duration == 0) {
	            var /** @type {?} */ targetKeyframe = this.getFinalKeyframe();
	            var /** @type {?} */ firstKeyframe = copyStyles(targetKeyframe, true);
	            firstKeyframe['offset'] = 0;
	            finalKeyframes.push(firstKeyframe);
	            var /** @type {?} */ lastKeyframe = copyStyles(targetKeyframe, true);
	            lastKeyframe['offset'] = 1;
	            finalKeyframes.push(lastKeyframe);
	        }
	        else {
	            this._keyframes.forEach(function (keyframe, time) {
	                var /** @type {?} */ finalKeyframe = copyStyles(keyframe, true);
	                finalKeyframe['offset'] = time / _this.duration;
	                finalKeyframes.push(finalKeyframe);
	            });
	        }
	        return createTimelineInstruction(finalKeyframes, this.duration, this.startTime, this.easing);
	    };
	    return TimelineBuilder;
	}());
	/**
	 * @param {?} ast
	 * @return {?}
	 */
	function getOffset(ast) {
	    var /** @type {?} */ offset = ast.offset;
	    if (offset == null) {
	        var /** @type {?} */ styles = ast.styles;
	        if (Array.isArray(styles)) {
	            for (var /** @type {?} */ i = 0; i < styles.length; i++) {
	                var /** @type {?} */ o = (styles[i]['offset']);
	                if (o != null) {
	                    offset = o;
	                    break;
	                }
	            }
	        }
	        else {
	            offset = (styles['offset']);
	        }
	    }
	    return offset;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} triggerName
	 * @param {?} fromState
	 * @param {?} toState
	 * @param {?} isRemovalTransition
	 * @param {?} fromStyles
	 * @param {?} toStyles
	 * @param {?} timelines
	 * @return {?}
	 */
	function createTransitionInstruction(triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines) {
	    return {
	        type: 0 /* TransitionAnimation */,
	        triggerName: triggerName,
	        isRemovalTransition: isRemovalTransition,
	        fromState: fromState,
	        fromStyles: fromStyles,
	        toState: toState,
	        toStyles: toStyles,
	        timelines: timelines
	    };
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var AnimationTransitionFactory = (function () {
	    /**
	     * @param {?} _triggerName
	     * @param {?} ast
	     * @param {?} matchFns
	     * @param {?} _stateStyles
	     */
	    function AnimationTransitionFactory(_triggerName, ast, matchFns, _stateStyles) {
	        this._triggerName = _triggerName;
	        this.matchFns = matchFns;
	        this._stateStyles = _stateStyles;
	        var normalizedAst = Array.isArray(ast.animation) ?
	            _angular_animations.sequence(ast.animation) :
	            ast.animation;
	        this._animationAst = normalizedAst;
	    }
	    /**
	     * @param {?} currentState
	     * @param {?} nextState
	     * @return {?}
	     */
	    AnimationTransitionFactory.prototype.match = function (currentState, nextState) {
	        if (!oneOrMoreTransitionsMatch(this.matchFns, currentState, nextState))
	            return;
	        var /** @type {?} */ backupStateStyles = this._stateStyles['*'] || {};
	        var /** @type {?} */ currentStateStyles = this._stateStyles[currentState] || backupStateStyles;
	        var /** @type {?} */ nextStateStyles = this._stateStyles[nextState] || backupStateStyles;
	        var /** @type {?} */ timelines = buildAnimationKeyframes(this._animationAst, currentStateStyles, nextStateStyles);
	        return createTransitionInstruction(this._triggerName, currentState, nextState, nextState === 'void', currentStateStyles, nextStateStyles, timelines);
	    };
	    return AnimationTransitionFactory;
	}());
	/**
	 * @param {?} matchFns
	 * @param {?} currentState
	 * @param {?} nextState
	 * @return {?}
	 */
	function oneOrMoreTransitionsMatch(matchFns, currentState, nextState) {
	    return matchFns.some(function (fn) { return fn(currentState, nextState); });
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} ast
	 * @return {?}
	 */
	function validateAnimationSequence(ast) {
	    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? _angular_animations.sequence(/** @type {?} */ (ast)) : (ast);
	    return new AnimationValidatorVisitor().validate(normalizedAst);
	}
	var AnimationValidatorVisitor = (function () {
	    function AnimationValidatorVisitor() {
	    }
	    /**
	     * @param {?} ast
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.validate = function (ast) {
	        var /** @type {?} */ context = new AnimationValidatorContext();
	        visitAnimationNode(this, ast, context);
	        return context.errors;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitState = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitTransition = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitSequence = function (ast, context) {
	        var _this = this;
	        ast.steps.forEach(function (step) { return visitAnimationNode(_this, step, context); });
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitGroup = function (ast, context) {
	        var _this = this;
	        var /** @type {?} */ currentTime = context.currentTime;
	        var /** @type {?} */ furthestTime = 0;
	        ast.steps.forEach(function (step) {
	            context.currentTime = currentTime;
	            visitAnimationNode(_this, step, context);
	            furthestTime = Math.max(furthestTime, context.currentTime);
	        });
	        context.currentTime = furthestTime;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitAnimate = function (ast, context) {
	        // we reassign the timings here so that they are not reparsed each
	        // time an animation occurs
	        context.currentAnimateTimings = ast.timings =
	            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
	        var /** @type {?} */ astType = ast.styles && ast.styles.type;
	        if (astType == 5 /* KeyframeSequence */) {
	            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
	        }
	        else {
	            context.currentTime +=
	                context.currentAnimateTimings.duration + context.currentAnimateTimings.delay;
	            if (astType == 6 /* Style */) {
	                this.visitStyle(/** @type {?} */ (ast.styles), context);
	            }
	        }
	        context.currentAnimateTimings = null;
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitStyle = function (ast, context) {
	        var /** @type {?} */ styleData = normalizeStyles(ast.styles);
	        var /** @type {?} */ timings = context.currentAnimateTimings;
	        var /** @type {?} */ endTime = context.currentTime;
	        var /** @type {?} */ startTime = context.currentTime;
	        if (timings && startTime > 0) {
	            startTime -= timings.duration + timings.delay;
	        }
	        Object.keys(styleData).forEach(function (prop) {
	            var /** @type {?} */ collectedEntry = context.collectedStyles[prop];
	            var /** @type {?} */ updateCollectedStyle = true;
	            if (collectedEntry) {
	                if (startTime != endTime && startTime >= collectedEntry.startTime &&
	                    endTime <= collectedEntry.endTime) {
	                    context.errors.push("The CSS property \"" + prop + "\" that exists between the times of \"" + collectedEntry.startTime + "ms\" and \"" + collectedEntry.endTime + "ms\" is also being animated in a parallel animation between the times of \"" + startTime + "ms\" and \"" + endTime + "ms\"");
	                    updateCollectedStyle = false;
	                }
	                // we always choose the smaller start time value since we
	                // want to have a record of the entire animation window where
	                // the style property is being animated in between
	                startTime = collectedEntry.startTime;
	            }
	            if (updateCollectedStyle) {
	                context.collectedStyles[prop] = { startTime: startTime, endTime: endTime };
	            }
	        });
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationValidatorVisitor.prototype.visitKeyframeSequence = function (ast, context) {
	        var _this = this;
	        var /** @type {?} */ totalKeyframesWithOffsets = 0;
	        var /** @type {?} */ offsets = [];
	        var /** @type {?} */ offsetsOutOfOrder = false;
	        var /** @type {?} */ keyframesOutOfRange = false;
	        var /** @type {?} */ previousOffset = 0;
	        ast.steps.forEach(function (step) {
	            var /** @type {?} */ styleData = normalizeStyles(step.styles);
	            var /** @type {?} */ offset = 0;
	            if (styleData.hasOwnProperty('offset')) {
	                totalKeyframesWithOffsets++;
	                offset = (styleData['offset']);
	            }
	            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
	            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
	            previousOffset = offset;
	            offsets.push(offset);
	        });
	        if (keyframesOutOfRange) {
	            context.errors.push("Please ensure that all keyframe offsets are between 0 and 1");
	        }
	        if (offsetsOutOfOrder) {
	            context.errors.push("Please ensure that all keyframe offsets are in order");
	        }
	        var /** @type {?} */ length = ast.steps.length;
	        var /** @type {?} */ generatedOffset = 0;
	        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
	            context.errors.push("Not all style() steps within the declared keyframes() contain offsets");
	        }
	        else if (totalKeyframesWithOffsets == 0) {
	            generatedOffset = 1 / length;
	        }
	        var /** @type {?} */ limit = length - 1;
	        var /** @type {?} */ currentTime = context.currentTime;
	        var /** @type {?} */ animateDuration = context.currentAnimateTimings.duration;
	        ast.steps.forEach(function (step, i) {
	            var /** @type {?} */ offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
	            var /** @type {?} */ durationUpToThisFrame = offset * animateDuration;
	            context.currentTime =
	                currentTime + context.currentAnimateTimings.delay + durationUpToThisFrame;
	            context.currentAnimateTimings.duration = durationUpToThisFrame;
	            _this.visitStyle(step, context);
	        });
	    };
	    return AnimationValidatorVisitor;
	}());
	var AnimationValidatorContext = (function () {
	    function AnimationValidatorContext() {
	        this.errors = [];
	        this.currentTime = 0;
	        this.collectedStyles = {};
	    }
	    return AnimationValidatorContext;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@experimental Animation support is experimental.
	 * @param {?} name
	 * @param {?} definitions
	 * @return {?}
	 */
	function buildTrigger(name, definitions) {
	    return new AnimationTriggerVisitor().buildTrigger(name, definitions);
	}
	/**
	 * \@experimental Animation support is experimental.
	 */
	var AnimationTrigger = (function () {
	    /**
	     * @param {?} name
	     * @param {?} states
	     * @param {?} _transitionAsts
	     */
	    function AnimationTrigger(name, states, _transitionAsts) {
	        var _this = this;
	        this.name = name;
	        this._transitionAsts = _transitionAsts;
	        this.transitionFactories = [];
	        this.states = {};
	        Object.keys(states).forEach(function (stateName) { _this.states[stateName] = copyStyles(states[stateName], false); });
	        var errors = [];
	        _transitionAsts.forEach(function (ast) {
	            var exprs = parseTransitionExpr(ast.expr, errors);
	            var sequenceErrors = validateAnimationSequence(ast);
	            if (sequenceErrors.length) {
	                errors.push.apply(errors, sequenceErrors);
	            }
	            else {
	                _this.transitionFactories.push(new AnimationTransitionFactory(_this.name, ast, exprs, states));
	            }
	        });
	        if (errors.length) {
	            var LINE_START = '\n - ';
	            throw new Error("Animation parsing for the " + name + " trigger have failed:" + LINE_START + errors.join(LINE_START));
	        }
	    }
	    /**
	     * @param {?} currentState
	     * @param {?} nextState
	     * @return {?}
	     */
	    AnimationTrigger.prototype.createFallbackInstruction = function (currentState, nextState) {
	        var /** @type {?} */ backupStateStyles = this.states['*'] || {};
	        var /** @type {?} */ currentStateStyles = this.states[currentState] || backupStateStyles;
	        var /** @type {?} */ nextStateStyles = this.states[nextState] || backupStateStyles;
	        return createTransitionInstruction(this.name, currentState, nextState, nextState == 'void', currentStateStyles, nextStateStyles, []);
	    };
	    /**
	     * @param {?} currentState
	     * @param {?} nextState
	     * @return {?}
	     */
	    AnimationTrigger.prototype.matchTransition = function (currentState, nextState) {
	        for (var /** @type {?} */ i = 0; i < this.transitionFactories.length; i++) {
	            var /** @type {?} */ result = this.transitionFactories[i].match(currentState, nextState);
	            if (result)
	                return result;
	        }
	    };
	    return AnimationTrigger;
	}());
	var AnimationTriggerContext = (function () {
	    function AnimationTriggerContext() {
	        this.errors = [];
	        this.states = {};
	        this.transitions = [];
	    }
	    return AnimationTriggerContext;
	}());
	var AnimationTriggerVisitor = (function () {
	    function AnimationTriggerVisitor() {
	    }
	    /**
	     * @param {?} name
	     * @param {?} definitions
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.buildTrigger = function (name, definitions) {
	        var _this = this;
	        var /** @type {?} */ context = new AnimationTriggerContext();
	        definitions.forEach(function (def) { return visitAnimationNode(_this, def, context); });
	        return new AnimationTrigger(name, context.states, context.transitions);
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitState = function (ast, context) {
	        var /** @type {?} */ styles = normalizeStyles(ast.styles.styles);
	        ast.name.split(/\s*,\s*/).forEach(function (name) { context.states[name] = styles; });
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitTransition = function (ast, context) {
	        context.transitions.push(ast);
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitSequence = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitGroup = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitAnimate = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitStyle = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    /**
	     * @param {?} ast
	     * @param {?} context
	     * @return {?}
	     */
	    AnimationTriggerVisitor.prototype.visitKeyframeSequence = function (ast, context) {
	        // these values are not visited in this AST
	    };
	    return AnimationTriggerVisitor;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var MARKED_FOR_ANIMATION_CLASSNAME = 'ng-animating';
	var MARKED_FOR_ANIMATION_SELECTOR = '.ng-animating';
	var MARKED_FOR_REMOVAL = '$$ngRemove';
	var VOID_STATE = 'void';
	var DomAnimationEngine = (function () {
	    /**
	     * @param {?} _driver
	     * @param {?} _normalizer
	     */
	    function DomAnimationEngine(_driver, _normalizer) {
	        this._driver = _driver;
	        this._normalizer = _normalizer;
	        this._flaggedInserts = new Set();
	        this._queuedRemovals = new Map();
	        this._queuedTransitionAnimations = [];
	        this._activeTransitionAnimations = new Map();
	        this._activeElementAnimations = new Map();
	        this._elementTriggerStates = new Map();
	        this._triggers = Object.create(null);
	        this._triggerListeners = new Map();
	        this._pendingListenerRemovals = new Map();
	    }
	    Object.defineProperty(DomAnimationEngine.prototype, "queuedPlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this._queuedTransitionAnimations.map(function (q) { return q.player; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DomAnimationEngine.prototype, "activePlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            var /** @type {?} */ players = [];
	            this._activeElementAnimations.forEach(function (activePlayers) { return players.push.apply(players, activePlayers); });
	            return players;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} trigger
	     * @param {?=} name
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.registerTrigger = function (trigger, name) {
	        if (name === void 0) { name = null; }
	        name = name || trigger.name;
	        if (this._triggers[name]) {
	            return;
	        }
	        this._triggers[name] = buildTrigger(name, trigger.definitions);
	    };
	    /**
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.onInsert = function (element, domFn) {
	        if (element['nodeType'] == 1) {
	            this._flaggedInserts.add(element);
	        }
	        domFn();
	    };
	    /**
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.onRemove = function (element, domFn) {
	        var _this = this;
	        if (element['nodeType'] != 1) {
	            domFn();
	            return;
	        }
	        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
	        if (lookupRef) {
	            var /** @type {?} */ possibleTriggers = Object.keys(lookupRef);
	            var /** @type {?} */ hasRemoval = possibleTriggers.some(function (triggerName) {
	                var /** @type {?} */ oldValue = lookupRef[triggerName];
	                var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
	                return !!instruction;
	            });
	            if (hasRemoval) {
	                element[MARKED_FOR_REMOVAL] = true;
	                this._queuedRemovals.set(element, domFn);
	                return;
	            }
	        }
	        // this means that there are no animations to take on this
	        // leave operation therefore we should fire the done|start callbacks
	        if (this._triggerListeners.has(element)) {
	            element[MARKED_FOR_REMOVAL] = true;
	            this._queuedRemovals.set(element, function () { });
	        }
	        this._onRemovalTransition(element).forEach(function (player) { return player.destroy(); });
	        domFn();
	    };
	    /**
	     * @param {?} element
	     * @param {?} property
	     * @param {?} value
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.setProperty = function (element, property, value) {
	        var /** @type {?} */ trigger = this._triggers[property];
	        if (!trigger) {
	            throw new Error("The provided animation trigger \"" + property + "\" has not been registered!");
	        }
	        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
	        if (!lookupRef) {
	            this._elementTriggerStates.set(element, lookupRef = {});
	        }
	        var /** @type {?} */ oldValue = lookupRef.hasOwnProperty(property) ? lookupRef[property] : VOID_STATE;
	        if (oldValue !== value) {
	            value = normalizeTriggerValue(value);
	            var /** @type {?} */ instruction = trigger.matchTransition(oldValue, value);
	            if (!instruction) {
	                // we do this to make sure we always have an animation player so
	                // that callback operations are properly called
	                instruction = trigger.createFallbackInstruction(oldValue, value);
	            }
	            this.animateTransition(element, instruction);
	            lookupRef[property] = value;
	        }
	    };
	    /**
	     * @param {?} element
	     * @param {?} eventName
	     * @param {?} eventPhase
	     * @param {?} callback
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
	        var _this = this;
	        if (!eventPhase) {
	            throw new Error("Unable to listen on the animation trigger \"" + eventName + "\" because the provided event is undefined!");
	        }
	        if (!this._triggers[eventName]) {
	            throw new Error("Unable to listen on the animation trigger event \"" + eventPhase + "\" because the animation trigger \"" + eventName + "\" doesn't exist!");
	        }
	        var /** @type {?} */ elementListeners = this._triggerListeners.get(element);
	        if (!elementListeners) {
	            this._triggerListeners.set(element, elementListeners = []);
	        }
	        validatePlayerEvent(eventName, eventPhase);
	        var /** @type {?} */ tuple = ({ triggerName: eventName, phase: eventPhase, callback: callback });
	        elementListeners.push(tuple);
	        return function () {
	            // this is queued up in the event that a removal animation is set
	            // to fire on the element (the listeners need to be set during flush)
	            getOrSetAsInMap(_this._pendingListenerRemovals, element, []).push(tuple);
	        };
	    };
	    /**
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._clearPendingListenerRemovals = function () {
	        var _this = this;
	        this._pendingListenerRemovals.forEach(function (tuples, element) {
	            var /** @type {?} */ elementListeners = _this._triggerListeners.get(element);
	            if (elementListeners) {
	                tuples.forEach(function (tuple) {
	                    var /** @type {?} */ index = elementListeners.indexOf(tuple);
	                    if (index >= 0) {
	                        elementListeners.splice(index, 1);
	                    }
	                });
	            }
	        });
	        this._pendingListenerRemovals.clear();
	    };
	    /**
	     * @param {?} element
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._onRemovalTransition = function (element) {
	        // when a parent animation is set to trigger a removal we want to
	        // find all of the children that are currently animating and clear
	        // them out by destroying each of them.
	        var /** @type {?} */ elms = element.querySelectorAll(MARKED_FOR_ANIMATION_SELECTOR);
	        var _loop_1 = function (i) {
	            var /** @type {?} */ elm = elms[i];
	            var /** @type {?} */ activePlayers = this_1._activeElementAnimations.get(elm);
	            if (activePlayers) {
	                activePlayers.forEach(function (player) { return player.destroy(); });
	            }
	            var /** @type {?} */ activeTransitions = this_1._activeTransitionAnimations.get(elm);
	            if (activeTransitions) {
	                Object.keys(activeTransitions).forEach(function (triggerName) {
	                    var /** @type {?} */ player = activeTransitions[triggerName];
	                    if (player) {
	                        player.destroy();
	                    }
	                });
	            }
	        };
	        var this_1 = this;
	        for (var /** @type {?} */ i = 0; i < elms.length; i++) {
	            _loop_1(/** @type {?} */ i);
	        }
	        // we make a copy of the array because the actual source array is modified
	        // each time a player is finished/destroyed (the forEach loop would fail otherwise)
	        return copyArray(this._activeElementAnimations.get(element));
	    };
	    /**
	     * @param {?} element
	     * @param {?} instruction
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.animateTransition = function (element, instruction) {
	        var _this = this;
	        var /** @type {?} */ triggerName = instruction.triggerName;
	        var /** @type {?} */ previousPlayers;
	        if (instruction.isRemovalTransition) {
	            previousPlayers = this._onRemovalTransition(element);
	        }
	        else {
	            previousPlayers = [];
	            var /** @type {?} */ existingTransitions = this._activeTransitionAnimations.get(element);
	            var /** @type {?} */ existingPlayer = existingTransitions ? existingTransitions[triggerName] : null;
	            if (existingPlayer) {
	                previousPlayers.push(existingPlayer);
	            }
	        }
	        // it's important to do this step before destroying the players
	        // so that the onDone callback below won't fire before this
	        eraseStyles(element, instruction.fromStyles);
	        // we first run this so that the previous animation player
	        // data can be passed into the successive animation players
	        var /** @type {?} */ totalTime = 0;
	        var /** @type {?} */ players = instruction.timelines.map(function (timelineInstruction, i) {
	            totalTime = Math.max(totalTime, timelineInstruction.totalTime);
	            return _this._buildPlayer(element, timelineInstruction, previousPlayers, i);
	        });
	        previousPlayers.forEach(function (previousPlayer) { return previousPlayer.destroy(); });
	        var /** @type {?} */ player = optimizeGroupPlayer(players);
	        player.onDone(function () {
	            player.destroy();
	            var /** @type {?} */ elmTransitionMap = _this._activeTransitionAnimations.get(element);
	            if (elmTransitionMap) {
	                delete elmTransitionMap[triggerName];
	                if (Object.keys(elmTransitionMap).length == 0) {
	                    _this._activeTransitionAnimations.delete(element);
	                }
	            }
	            deleteFromArrayMap(_this._activeElementAnimations, element, player);
	            setStyles(element, instruction.toStyles);
	        });
	        var /** @type {?} */ elmTransitionMap = getOrSetAsInMap(this._activeTransitionAnimations, element, {});
	        elmTransitionMap[triggerName] = player;
	        this._queuePlayer(element, triggerName, player, makeAnimationEvent(element, triggerName, instruction.fromState, instruction.toState, null, // this will be filled in during event creation
	        totalTime));
	        return player;
	    };
	    /**
	     * @param {?} element
	     * @param {?} instructions
	     * @param {?=} previousPlayers
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.animateTimeline = function (element, instructions, previousPlayers) {
	        var _this = this;
	        if (previousPlayers === void 0) { previousPlayers = []; }
	        var /** @type {?} */ players = instructions.map(function (instruction, i) {
	            var /** @type {?} */ player = _this._buildPlayer(element, instruction, previousPlayers, i);
	            player.onDestroy(function () { deleteFromArrayMap(_this._activeElementAnimations, element, player); });
	            _this._markPlayerAsActive(element, player);
	            return player;
	        });
	        return optimizeGroupPlayer(players);
	    };
	    /**
	     * @param {?} element
	     * @param {?} instruction
	     * @param {?} previousPlayers
	     * @param {?=} index
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._buildPlayer = function (element, instruction, previousPlayers, index) {
	        if (index === void 0) { index = 0; }
	        // only the very first animation can absorb the previous styles. This
	        // is here to prevent the an overlap situation where a group animation
	        // absorbs previous styles multiple times for the same element.
	        if (index && previousPlayers.length) {
	            previousPlayers = [];
	        }
	        return this._driver.animate(element, this._normalizeKeyframes(instruction.keyframes), instruction.duration, instruction.delay, instruction.easing, previousPlayers);
	    };
	    /**
	     * @param {?} keyframes
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._normalizeKeyframes = function (keyframes) {
	        var _this = this;
	        var /** @type {?} */ errors = [];
	        var /** @type {?} */ normalizedKeyframes = [];
	        keyframes.forEach(function (kf) {
	            var /** @type {?} */ normalizedKeyframe = {};
	            Object.keys(kf).forEach(function (prop) {
	                var /** @type {?} */ normalizedProp = prop;
	                var /** @type {?} */ normalizedValue = kf[prop];
	                if (prop != 'offset') {
	                    normalizedProp = _this._normalizer.normalizePropertyName(prop, errors);
	                    normalizedValue =
	                        _this._normalizer.normalizeStyleValue(prop, normalizedProp, kf[prop], errors);
	                }
	                normalizedKeyframe[normalizedProp] = normalizedValue;
	            });
	            normalizedKeyframes.push(normalizedKeyframe);
	        });
	        if (errors.length) {
	            var /** @type {?} */ LINE_START = '\n - ';
	            throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
	        }
	        return normalizedKeyframes;
	    };
	    /**
	     * @param {?} element
	     * @param {?} player
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._markPlayerAsActive = function (element, player) {
	        var /** @type {?} */ elementAnimations = getOrSetAsInMap(this._activeElementAnimations, element, []);
	        elementAnimations.push(player);
	    };
	    /**
	     * @param {?} element
	     * @param {?} triggerName
	     * @param {?} player
	     * @param {?} event
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._queuePlayer = function (element, triggerName, player, event) {
	        var /** @type {?} */ tuple = ({ element: element, player: player, triggerName: triggerName, event: event });
	        this._queuedTransitionAnimations.push(tuple);
	        player.init();
	        element.classList.add(MARKED_FOR_ANIMATION_CLASSNAME);
	        player.onDone(function () { element.classList.remove(MARKED_FOR_ANIMATION_CLASSNAME); });
	    };
	    /**
	     * @return {?}
	     */
	    DomAnimationEngine.prototype._flushQueuedAnimations = function () {
	        var _loop_2 = function () {
	            var _a = this_2._queuedTransitionAnimations.shift(), player = _a.player, element = _a.element, triggerName = _a.triggerName, event = _a.event;
	            var /** @type {?} */ parent = element;
	            while (parent = parent.parentNode) {
	                // this means that a parent element will or will not
	                // have its own animation operation which in this case
	                // there's no point in even trying to do an animation
	                if (parent[MARKED_FOR_REMOVAL])
	                    return "continue-parentLoop";
	            }
	            var /** @type {?} */ listeners = this_2._triggerListeners.get(element);
	            if (listeners) {
	                listeners.forEach(function (tuple) {
	                    if (tuple.triggerName == triggerName) {
	                        listenOnPlayer(player, tuple.phase, event, tuple.callback);
	                    }
	                });
	            }
	            // if a removal exists for the given element then we need cancel
	            // all the queued players so that a proper removal animation can go
	            if (this_2._queuedRemovals.has(element)) {
	                player.destroy();
	                return "continue";
	            }
	            this_2._markPlayerAsActive(element, player);
	            // in the event that an animation throws an error then we do
	            // not want to re-run animations on any previous animations
	            // if they have already been kicked off beforehand
	            player.init();
	            if (!player.hasStarted()) {
	                player.play();
	            }
	        };
	        var this_2 = this;
	        parentLoop: while (this._queuedTransitionAnimations.length) {
	            var state_1 = _loop_2();
	            switch (state_1) {
	                case "continue-parentLoop": continue parentLoop;
	            }
	        }
	    };
	    /**
	     * @return {?}
	     */
	    DomAnimationEngine.prototype.flush = function () {
	        var _this = this;
	        var /** @type {?} */ leaveListeners = new Map();
	        this._queuedRemovals.forEach(function (callback, element) {
	            var /** @type {?} */ tuple = _this._pendingListenerRemovals.get(element);
	            if (tuple) {
	                leaveListeners.set(element, tuple);
	                _this._pendingListenerRemovals.delete(element);
	            }
	        });
	        this._clearPendingListenerRemovals();
	        this._pendingListenerRemovals = leaveListeners;
	        this._flushQueuedAnimations();
	        var /** @type {?} */ flushAgain = false;
	        this._queuedRemovals.forEach(function (callback, element) {
	            // an item that was inserted/removed in the same flush means
	            // that an animation should not happen anyway
	            if (_this._flaggedInserts.has(element))
	                return;
	            var /** @type {?} */ parent = element;
	            var /** @type {?} */ players = [];
	            while (parent = parent.parentNode) {
	                // there is no reason to even try to
	                if (parent[MARKED_FOR_REMOVAL]) {
	                    callback();
	                    return;
	                }
	                var /** @type {?} */ match = _this._activeElementAnimations.get(parent);
	                if (match) {
	                    players.push.apply(players, match);
	                    break;
	                }
	            }
	            // the loop was unable to find an parent that is animating even
	            // though this element has set to be removed, so the algorithm
	            // should check to see if there are any triggers on the element
	            // that are present to handle a leave animation and then setup
	            // those players to facilitate the callback after done
	            if (players.length == 0) {
	                // this means that the element has valid state triggers
	                var /** @type {?} */ stateDetails_1 = _this._elementTriggerStates.get(element);
	                if (stateDetails_1) {
	                    Object.keys(stateDetails_1).forEach(function (triggerName) {
	                        flushAgain = true;
	                        var /** @type {?} */ oldValue = stateDetails_1[triggerName];
	                        var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
	                        if (instruction) {
	                            players.push(_this.animateTransition(element, instruction));
	                        }
	                        else {
	                            var /** @type {?} */ event = makeAnimationEvent(element, triggerName, oldValue, VOID_STATE, '', 0);
	                            var /** @type {?} */ player = new _angular_animations.NoopAnimationPlayer();
	                            _this._queuePlayer(element, triggerName, player, event);
	                        }
	                    });
	                }
	            }
	            if (players.length) {
	                optimizeGroupPlayer(players).onDone(callback);
	            }
	            else {
	                callback();
	            }
	        });
	        this._queuedRemovals.clear();
	        this._flaggedInserts.clear();
	        // this means that one or more leave animations were detected
	        if (flushAgain) {
	            this._flushQueuedAnimations();
	            this._clearPendingListenerRemovals();
	        }
	    };
	    return DomAnimationEngine;
	}());
	/**
	 * @param {?} map
	 * @param {?} key
	 * @param {?} defaultValue
	 * @return {?}
	 */
	function getOrSetAsInMap(map, key, defaultValue) {
	    var /** @type {?} */ value = map.get(key);
	    if (!value) {
	        map.set(key, value = defaultValue);
	    }
	    return value;
	}
	/**
	 * @param {?} map
	 * @param {?} key
	 * @param {?} value
	 * @return {?}
	 */
	function deleteFromArrayMap(map, key, value) {
	    var /** @type {?} */ arr = map.get(key);
	    if (arr) {
	        var /** @type {?} */ index = arr.indexOf(value);
	        if (index >= 0) {
	            arr.splice(index, 1);
	            if (arr.length == 0) {
	                map.delete(key);
	            }
	        }
	    }
	}
	/**
	 * @param {?} players
	 * @return {?}
	 */
	function optimizeGroupPlayer(players) {
	    switch (players.length) {
	        case 0:
	            return new _angular_animations.NoopAnimationPlayer();
	        case 1:
	            return players[0];
	        default:
	            return new _angular_animations.ɵAnimationGroupPlayer(players);
	    }
	}
	/**
	 * @param {?} source
	 * @return {?}
	 */
	function copyArray(source) {
	    return source ? source.splice(0) : [];
	}
	/**
	 * @param {?} triggerName
	 * @param {?} eventName
	 * @return {?}
	 */
	function validatePlayerEvent(triggerName, eventName) {
	    switch (eventName) {
	        case 'start':
	        case 'done':
	            return;
	        default:
	            throw new Error("The provided animation trigger event \"" + eventName + "\" for the animation trigger \"" + triggerName + "\" is not supported!");
	    }
	}
	/**
	 * @param {?} player
	 * @param {?} eventName
	 * @param {?} baseEvent
	 * @param {?} callback
	 * @return {?}
	 */
	function listenOnPlayer(player, eventName, baseEvent, callback) {
	    switch (eventName) {
	        case 'start':
	            player.onStart(function () {
	                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
	                event.phaseName = 'start';
	                callback(event);
	            });
	            break;
	        case 'done':
	            player.onDone(function () {
	                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
	                event.phaseName = 'done';
	                callback(event);
	            });
	            break;
	    }
	}
	/**
	 * @param {?} e
	 * @return {?}
	 */
	function copyAnimationEvent(e) {
	    return makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, e.phaseName, e.totalTime);
	}
	/**
	 * @param {?} element
	 * @param {?} triggerName
	 * @param {?} fromState
	 * @param {?} toState
	 * @param {?} phaseName
	 * @param {?} totalTime
	 * @return {?}
	 */
	function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime) {
	    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
	}
	/**
	 * @param {?} value
	 * @return {?}
	 */
	function normalizeTriggerValue(value) {
	    switch (typeof value) {
	        case 'boolean':
	            return value ? '1' : '0';
	        default:
	            return value ? value.toString() : null;
	    }
	}
	/**
	 * \@experimental Animation support is experimental.
	 * @abstract
	 */
	var AnimationStyleNormalizer = (function () {
	    function AnimationStyleNormalizer() {
	    }
	    /**
	     * @abstract
	     * @param {?} propertyName
	     * @param {?} errors
	     * @return {?}
	     */
	    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
	    /**
	     * @abstract
	     * @param {?} userProvidedProperty
	     * @param {?} normalizedProperty
	     * @param {?} value
	     * @param {?} errors
	     * @return {?}
	     */
	    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
	    return AnimationStyleNormalizer;
	}());
	/**
	 * \@experimental Animation support is experimental.
	 */
	var NoopAnimationStyleNormalizer = (function () {
	    function NoopAnimationStyleNormalizer() {
	    }
	    /**
	     * @param {?} propertyName
	     * @param {?} errors
	     * @return {?}
	     */
	    NoopAnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { return propertyName; };
	    /**
	     * @param {?} userProvidedProperty
	     * @param {?} normalizedProperty
	     * @param {?} value
	     * @param {?} errors
	     * @return {?}
	     */
	    NoopAnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
	        return (value);
	    };
	    return NoopAnimationStyleNormalizer;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var Animation = (function () {
	    /**
	     * @param {?} input
	     */
	    function Animation(input) {
	        var ast = Array.isArray(input) ? _angular_animations.sequence(input) : input;
	        var errors = validateAnimationSequence(ast);
	        if (errors.length) {
	            var errorMessage = "animation validation failed:\n" + errors.join("\n");
	            throw new Error(errorMessage);
	        }
	        this._animationAst = ast;
	    }
	    /**
	     * @param {?} startingStyles
	     * @param {?} destinationStyles
	     * @return {?}
	     */
	    Animation.prototype.buildTimelines = function (startingStyles, destinationStyles) {
	        var /** @type {?} */ start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : (startingStyles);
	        var /** @type {?} */ dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : (destinationStyles);
	        return buildAnimationKeyframes(this._animationAst, start, dest);
	    };
	    /**
	     * @param {?} injector
	     * @param {?} element
	     * @param {?=} startingStyles
	     * @param {?=} destinationStyles
	     * @return {?}
	     */
	    Animation.prototype.create = function (injector, element, startingStyles, destinationStyles) {
	        if (startingStyles === void 0) { startingStyles = {}; }
	        if (destinationStyles === void 0) { destinationStyles = {}; }
	        var /** @type {?} */ instructions = this.buildTimelines(startingStyles, destinationStyles);
	        // note the code below is only here to make the tests happy (once the new renderer is
	        // within core then the code below will interact with Renderer.transition(...))
	        var /** @type {?} */ driver = injector.get(AnimationDriver);
	        var /** @type {?} */ normalizer = injector.get(AnimationStyleNormalizer);
	        var /** @type {?} */ engine = new DomAnimationEngine(driver, normalizer);
	        return engine.animateTimeline(element, instructions);
	    };
	    return Animation;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WebAnimationsStyleNormalizer = (function (_super) {
	    __extends(WebAnimationsStyleNormalizer, _super);
	    function WebAnimationsStyleNormalizer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @param {?} propertyName
	     * @param {?} errors
	     * @return {?}
	     */
	    WebAnimationsStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) {
	        return dashCaseToCamelCase(propertyName);
	    };
	    /**
	     * @param {?} userProvidedProperty
	     * @param {?} normalizedProperty
	     * @param {?} value
	     * @param {?} errors
	     * @return {?}
	     */
	    WebAnimationsStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
	        var /** @type {?} */ unit = '';
	        var /** @type {?} */ strVal = value.toString().trim();
	        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
	            if (typeof value === 'number') {
	                unit = 'px';
	            }
	            else {
	                var /** @type {?} */ valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
	                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
	                    errors.push("Please provide a CSS unit value for " + userProvidedProperty + ":" + value);
	                }
	            }
	        }
	        return strVal + unit;
	    };
	    return WebAnimationsStyleNormalizer;
	}(AnimationStyleNormalizer));
	var DIMENSIONAL_PROP_MAP = makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent'
	    .split(','));
	/**
	 * @param {?} keys
	 * @return {?}
	 */
	function makeBooleanMap(keys) {
	    var /** @type {?} */ map = {};
	    keys.forEach(function (key) { return map[key] = true; });
	    return map;
	}
	var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
	/**
	 * @param {?} input
	 * @return {?}
	 */
	function dashCaseToCamelCase(input) {
	    return input.replace(DASH_CASE_REGEXP, function () {
	        var m = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            m[_i] = arguments[_i];
	        }
	        return m[1].toUpperCase();
	    });
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var DEFAULT_STATE_VALUE = 'void';
	var DEFAULT_STATE_STYLES = '*';
	var NoopAnimationEngine = (function (_super) {
	    __extends(NoopAnimationEngine, _super);
	    function NoopAnimationEngine() {
	        var _this = _super.apply(this, arguments) || this;
	        _this._listeners = new Map();
	        _this._changes = [];
	        _this._flaggedRemovals = new Set();
	        _this._onDoneFns = [];
	        _this._triggerStyles = Object.create(null);
	        return _this;
	    }
	    /**
	     * @param {?} trigger
	     * @param {?=} name
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.registerTrigger = function (trigger, name) {
	        if (name === void 0) { name = null; }
	        name = name || trigger.name;
	        if (this._triggerStyles[name]) {
	            return;
	        }
	        var /** @type {?} */ stateMap = {};
	        trigger.definitions.forEach(function (def) {
	            if (def.type === 0 /* State */) {
	                var /** @type {?} */ stateDef = (def);
	                stateMap[stateDef.name] = normalizeStyles(stateDef.styles.styles);
	            }
	        });
	        this._triggerStyles[name] = stateMap;
	    };
	    /**
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.onInsert = function (element, domFn) { domFn(); };
	    /**
	     * @param {?} element
	     * @param {?} domFn
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.onRemove = function (element, domFn) {
	        domFn();
	        if (element['nodeType'] == 1) {
	            this._flaggedRemovals.add(element);
	        }
	    };
	    /**
	     * @param {?} element
	     * @param {?} property
	     * @param {?} value
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.setProperty = function (element, property, value) {
	        var /** @type {?} */ storageProp = makeStorageProp(property);
	        var /** @type {?} */ oldValue = element[storageProp] || DEFAULT_STATE_VALUE;
	        this._changes.push(/** @type {?} */ ({ element: element, oldValue: oldValue, newValue: value, triggerName: property }));
	        var /** @type {?} */ triggerStateStyles = this._triggerStyles[property] || {};
	        var /** @type {?} */ fromStateStyles = triggerStateStyles[oldValue] || triggerStateStyles[DEFAULT_STATE_STYLES];
	        if (fromStateStyles) {
	            eraseStyles(element, fromStateStyles);
	        }
	        element[storageProp] = value;
	        this._onDoneFns.push(function () {
	            var /** @type {?} */ toStateStyles = triggerStateStyles[value] || triggerStateStyles[DEFAULT_STATE_STYLES];
	            if (toStateStyles) {
	                setStyles(element, toStateStyles);
	            }
	        });
	    };
	    /**
	     * @param {?} element
	     * @param {?} eventName
	     * @param {?} eventPhase
	     * @param {?} callback
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
	        var /** @type {?} */ listeners = this._listeners.get(element);
	        if (!listeners) {
	            this._listeners.set(element, listeners = []);
	        }
	        var /** @type {?} */ tuple = ({ triggerName: eventName, eventPhase: eventPhase, callback: callback });
	        listeners.push(tuple);
	        return function () { return tuple.doRemove = true; };
	    };
	    /**
	     * @return {?}
	     */
	    NoopAnimationEngine.prototype.flush = function () {
	        var _this = this;
	        var /** @type {?} */ onStartCallbacks = [];
	        var /** @type {?} */ onDoneCallbacks = [];
	        /**
	         * @param {?} listener
	         * @param {?} data
	         * @return {?}
	         */
	        function handleListener(listener, data) {
	            var /** @type {?} */ phase = listener.eventPhase;
	            var /** @type {?} */ event = makeAnimationEvent$1(data.element, data.triggerName, data.oldValue, data.newValue, phase, 0);
	            if (phase == 'start') {
	                onStartCallbacks.push(function () { return listener.callback(event); });
	            }
	            else if (phase == 'done') {
	                onDoneCallbacks.push(function () { return listener.callback(event); });
	            }
	        }
	        this._changes.forEach(function (change) {
	            var /** @type {?} */ element = change.element;
	            var /** @type {?} */ listeners = _this._listeners.get(element);
	            if (listeners) {
	                listeners.forEach(function (listener) {
	                    if (listener.triggerName == change.triggerName) {
	                        handleListener(listener, change);
	                    }
	                });
	            }
	        });
	        // upon removal ALL the animation triggers need to get fired
	        this._flaggedRemovals.forEach(function (element) {
	            var /** @type {?} */ listeners = _this._listeners.get(element);
	            if (listeners) {
	                listeners.forEach(function (listener) {
	                    var /** @type {?} */ triggerName = listener.triggerName;
	                    var /** @type {?} */ storageProp = makeStorageProp(triggerName);
	                    handleListener(listener, /** @type {?} */ ({
	                        element: element,
	                        triggerName: triggerName,
	                        oldValue: element[storageProp] || DEFAULT_STATE_VALUE,
	                        newValue: DEFAULT_STATE_VALUE
	                    }));
	                });
	            }
	        });
	        // remove all the listeners after everything is complete
	        Array.from(this._listeners.keys()).forEach(function (element) {
	            var /** @type {?} */ listenersToKeep = _this._listeners.get(element).filter(function (l) { return !l.doRemove; });
	            if (listenersToKeep.length) {
	                _this._listeners.set(element, listenersToKeep);
	            }
	            else {
	                _this._listeners.delete(element);
	            }
	        });
	        onStartCallbacks.forEach(function (fn) { return fn(); });
	        onDoneCallbacks.forEach(function (fn) { return fn(); });
	        this._flaggedRemovals.clear();
	        this._changes = [];
	        this._onDoneFns.forEach(function (doneFn) { return doneFn(); });
	        this._onDoneFns = [];
	    };
	    Object.defineProperty(NoopAnimationEngine.prototype, "activePlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NoopAnimationEngine.prototype, "queuedPlayers", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    return NoopAnimationEngine;
	}(AnimationEngine));
	/**
	 * @param {?} element
	 * @param {?} triggerName
	 * @param {?} fromState
	 * @param {?} toState
	 * @param {?} phaseName
	 * @param {?} totalTime
	 * @return {?}
	 */
	function makeAnimationEvent$1(element, triggerName, fromState, toState, phaseName, totalTime) {
	    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
	}
	/**
	 * @param {?} property
	 * @return {?}
	 */
	function makeStorageProp(property) {
	    return '_@_' + property;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WebAnimationsPlayer = (function () {
	    /**
	     * @param {?} element
	     * @param {?} keyframes
	     * @param {?} options
	     * @param {?=} previousPlayers
	     */
	    function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
	        if (previousPlayers === void 0) { previousPlayers = []; }
	        var _this = this;
	        this.element = element;
	        this.keyframes = keyframes;
	        this.options = options;
	        this._onDoneFns = [];
	        this._onStartFns = [];
	        this._onDestroyFns = [];
	        this._initialized = false;
	        this._finished = false;
	        this._started = false;
	        this._destroyed = false;
	        this.time = 0;
	        this.parentPlayer = null;
	        this._duration = options['duration'];
	        this._delay = options['delay'] || 0;
	        this.time = this._duration + this._delay;
	        this.previousStyles = {};
	        previousPlayers.forEach(function (player) {
	            var styles = player._captureStyles();
	            Object.keys(styles).forEach(function (prop) { return _this.previousStyles[prop] = styles[prop]; });
	        });
	    }
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype._onFinish = function () {
	        if (!this._finished) {
	            this._finished = true;
	            this._onDoneFns.forEach(function (fn) { return fn(); });
	            this._onDoneFns = [];
	        }
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.init = function () {
	        var _this = this;
	        if (this._initialized)
	            return;
	        this._initialized = true;
	        var /** @type {?} */ keyframes = this.keyframes.map(function (styles) {
	            var /** @type {?} */ formattedKeyframe = {};
	            Object.keys(styles).forEach(function (prop, index) {
	                var /** @type {?} */ value = styles[prop];
	                if (value == _angular_animations.AUTO_STYLE) {
	                    value = _computeStyle(_this.element, prop);
	                }
	                if (value != undefined) {
	                    formattedKeyframe[prop] = value;
	                }
	            });
	            return formattedKeyframe;
	        });
	        var /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
	        if (previousStyleProps.length) {
	            var /** @type {?} */ startingKeyframe_1 = keyframes[0];
	            var /** @type {?} */ missingStyleProps_1 = [];
	            previousStyleProps.forEach(function (prop) {
	                if (!startingKeyframe_1.hasOwnProperty(prop)) {
	                    missingStyleProps_1.push(prop);
	                }
	                startingKeyframe_1[prop] = _this.previousStyles[prop];
	            });
	            if (missingStyleProps_1.length) {
	                var /** @type {?} */ self_1 = this;
	                var _loop_3 = function () {
	                    var /** @type {?} */ kf = keyframes[i];
	                    missingStyleProps_1.forEach(function (prop) {
	                        kf[prop] = _computeStyle(self_1.element, prop);
	                    });
	                };
	                // tslint:disable-next-line
	                for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
	                    _loop_3();
	                }
	            }
	        }
	        this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
	        this._finalKeyframe =
	            keyframes.length ? _copyKeyframeStyles(keyframes[keyframes.length - 1]) : {};
	        // this is required so that the player doesn't start to animate right away
	        this._resetDomPlayerState();
	        this._player.addEventListener('finish', function () { return _this._onFinish(); });
	    };
	    /**
	     * \@internal
	     * @param {?} element
	     * @param {?} keyframes
	     * @param {?} options
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
	        // jscompiler doesn't seem to know animate is a native property because it's not fully
	        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
	        return (element['animate'](keyframes, options));
	    };
	    Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._player; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.play = function () {
	        this.init();
	        if (!this.hasStarted()) {
	            this._onStartFns.forEach(function (fn) { return fn(); });
	            this._onStartFns = [];
	            this._started = true;
	        }
	        this._player.play();
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.pause = function () {
	        this.init();
	        this._player.pause();
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.finish = function () {
	        this.init();
	        this._onFinish();
	        this._player.finish();
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.reset = function () {
	        this._resetDomPlayerState();
	        this._destroyed = false;
	        this._finished = false;
	        this._started = false;
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
	        if (this._player) {
	            this._player.cancel();
	        }
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.restart = function () {
	        this.reset();
	        this.play();
	    };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.destroy = function () {
	        if (!this._destroyed) {
	            this._resetDomPlayerState();
	            this._onFinish();
	            this._destroyed = true;
	            this._onDestroyFns.forEach(function (fn) { return fn(); });
	            this._onDestroyFns = [];
	        }
	    };
	    /**
	     * @param {?} p
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.time; };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.time; };
	    /**
	     * @return {?}
	     */
	    WebAnimationsPlayer.prototype._captureStyles = function () {
	        var _this = this;
	        var /** @type {?} */ styles = {};
	        if (this.hasStarted()) {
	            Object.keys(this._finalKeyframe).forEach(function (prop) {
	                if (prop != 'offset') {
	                    styles[prop] =
	                        _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
	                }
	            });
	        }
	        return styles;
	    };
	    return WebAnimationsPlayer;
	}());
	/**
	 * @param {?} element
	 * @param {?} prop
	 * @return {?}
	 */
	function _computeStyle(element, prop) {
	    return ((window.getComputedStyle(element)))[prop];
	}
	/**
	 * @param {?} styles
	 * @return {?}
	 */
	function _copyKeyframeStyles(styles) {
	    var /** @type {?} */ newStyles = {};
	    Object.keys(styles).forEach(function (prop) {
	        if (prop != 'offset') {
	            newStyles[prop] = styles[prop];
	        }
	    });
	    return newStyles;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var WebAnimationsDriver = (function () {
	    function WebAnimationsDriver() {
	    }
	    /**
	     * @param {?} element
	     * @param {?} keyframes
	     * @param {?} duration
	     * @param {?} delay
	     * @param {?} easing
	     * @param {?=} previousPlayers
	     * @return {?}
	     */
	    WebAnimationsDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
	        if (previousPlayers === void 0) { previousPlayers = []; }
	        var /** @type {?} */ playerOptions = { 'duration': duration, 'delay': delay, 'fill': 'forwards' };
	        // we check for this to avoid having a null|undefined value be present
	        // for the easing (which results in an error for certain browsers #9752)
	        if (easing) {
	            playerOptions['easing'] = easing;
	        }
	        var /** @type {?} */ previousWebAnimationPlayers = (previousPlayers.filter(function (player) { return player instanceof WebAnimationsPlayer; }));
	        return new WebAnimationsPlayer(element, keyframes, playerOptions, previousWebAnimationPlayers);
	    };
	    return WebAnimationsDriver;
	}());
	/**
	 * @return {?}
	 */
	function supportsWebAnimations() {
	    return typeof Element !== 'undefined' && typeof ((Element)).prototype['animate'] === 'function';
	}

	exports.AnimationDriver = AnimationDriver;
	exports.ɵAnimationEngine = AnimationEngine;
	exports.ɵAnimation = Animation;
	exports.ɵAnimationStyleNormalizer = AnimationStyleNormalizer;
	exports.ɵNoopAnimationStyleNormalizer = NoopAnimationStyleNormalizer;
	exports.ɵWebAnimationsStyleNormalizer = WebAnimationsStyleNormalizer;
	exports.ɵNoopAnimationDriver = NoopAnimationDriver;
	exports.ɵDomAnimationEngine = DomAnimationEngine;
	exports.ɵNoopAnimationEngine = NoopAnimationEngine;
	exports.ɵWebAnimationsDriver = WebAnimationsDriver;
	exports.ɵsupportsWebAnimations = supportsWebAnimations;
	exports.ɵWebAnimationsPlayer = WebAnimationsPlayer;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	//# sourceMappingURL=animations-browser.umd.js.map


/***/ },
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: App
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        encapsulation: core_1.ViewEncapsulation.None,
	        template: __webpack_require__(61),
	        styles: [__webpack_require__(62)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<github-corner></github-corner>\n<demo-header></demo-header>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <demo-options #options></demo-options>\n        </div>\n        <div class=\"col-sm-offset-1 col-sm-7\">\n            <demo-table [loading]=\"options.data\"></demo-table>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "/**\n * @file App style\n * @author yumao<yuzhang.lille@gmail.com>\n */\n.form-control:focus {\n  border-color: #e86c8c;\n}\n.c-input > input:checked ~ .c-indicator {\n  background-color: #b03a58;\n}\n.c-input > input:focus ~ .c-indicator {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #b03a58;\n}\n.c-input > input:active ~ .c-indicator {\n  background-color: #e86c8c;\n}\n.btn:focus,\n.btn:focus:active {\n  outline: 0;\n}\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file GithubCorner index
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(64));


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: GithubCorner
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var GithubCornerComponent = (function () {
	    function GithubCornerComponent() {
	    }
	    return GithubCornerComponent;
	}());
	GithubCornerComponent = __decorate([
	    core_1.Component({
	        selector: 'github-corner',
	        template: __webpack_require__(65),
	        styles: [__webpack_require__(66)]
	    })
	], GithubCornerComponent);
	exports.GithubCornerComponent = GithubCornerComponent;


/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<!-- from: http://tholman.com/github-corners -->\n<a href=\"https://github.com/devyumao/angular2-busy\" class=\"github-corner\">\n    <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\">\n        <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n        <path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" class=\"octo-arm\"></path>\n        <path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path>\n    </svg>\n</a>\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "/**\n * @file GithubCorner style\n * @author yumao<yuzhang.lille@gmail.com>\n */\n.github-corner svg {\n  position: absolute;\n  top: 0;\n  border: 0;\n  right: 0;\n  fill: #fff;\n  color: #b03a58;\n}\n.github-corner .octo-arm {\n  -webkit-transform-origin: 130px 106px;\n          transform-origin: 130px 106px;\n}\n.github-corner:hover .octo-arm {\n  -webkit-animation: octocat-wave 560ms ease-in-out;\n          animation: octocat-wave 560ms ease-in-out;\n}\n@media (max-width: 500px) {\n  .github-corner .octo-arm {\n    -webkit-animation: octocat-wave 560ms ease-in-out;\n            animation: octocat-wave 560ms ease-in-out;\n  }\n  .github-corner:hover .octo-arm {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n@-webkit-keyframes octocat-wave {\n  0%,\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  20%,\n  60% {\n    -webkit-transform: rotate(-25deg);\n            transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n}\n@keyframes octocat-wave {\n  0%,\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  20%,\n  60% {\n    -webkit-transform: rotate(-25deg);\n            transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n}\n"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Header index
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(68));


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: Header
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(4);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    return HeaderComponent;
	}());
	HeaderComponent = __decorate([
	    core_1.Component({
	        selector: 'demo-header',
	        template: __webpack_require__(69),
	        styles: [__webpack_require__(70)]
	    })
	], HeaderComponent);
	exports.HeaderComponent = HeaderComponent;


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<header>\n    <div class=\"container\">\n        <h1>Angular 2 Busy</h1>\n        <p class=\"lead\">Show busy/loading indicators on any promise, or on any Observable's subscription.</p>\n    </div>\n</header>\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "/**\n * @file Header style\n * @author yumao<yuzhang.lille@gmail.com>\n */\nheader {\n  padding: 3rem .9375rem;\n  margin-bottom: 3rem;\n  background: #b03a58;\n  color: #e8bac5;\n}\nheader h1 {\n  color: #fff;\n  font-size: 3rem;\n}\n"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Options index
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(72));


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: Options
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
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(40);
	var __1 = __webpack_require__(50);
	// import {BUSY_CONFIG_DEFAULTS, IBusyConfig} from 'angular2-busy';
	var options_template_1 = __webpack_require__(73);
	var OptionsComponent = (function () {
	    function OptionsComponent(http) {
	        this.http = http;
	        this.templateType = 'default';
	        this.data = Object.assign({}, __1.BUSY_CONFIG_DEFAULTS);
	    }
	    OptionsComponent.prototype.changeTemplate = function (type) {
	        this.data.template = options_template_1.OPTIONS_TEMPLATE[type];
	    };
	    OptionsComponent.prototype.playDemo = function () {
	        // this.data.busy = this.http.get('https://httpbin.org/delay/3')
	        //     .subscribe();
	        this.data.busy = this.http.get('https://httpbin.org/delay/1')
	            .toPromise();
	    };
	    return OptionsComponent;
	}());
	OptionsComponent = __decorate([
	    core_1.Component({
	        selector: 'demo-options',
	        template: __webpack_require__(74),
	        styles: [__webpack_require__(75)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
	], OptionsComponent);
	exports.OptionsComponent = OptionsComponent;
	var _a;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Options Template
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var __1 = __webpack_require__(50);
	exports.OPTIONS_TEMPLATE = {
	    default: __1.BUSY_CONFIG_DEFAULTS.template,
	    custom: "\n        <div style=\"background: url('./img/du.gif') no-repeat center 20px; background-size: 72px;\">\n            <div style=\"margin-top: 110px; text-align: center; font-size: 18px; font-weight: 700;\">\n                {{message}}\n            </div>\n        </div>\n    "
	};


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<form>\n    <div class=\"form-group row\">\n        <label for=\"options-delay\" class=\"col-sm-5 form-control-label\">Delay (ms)</label>\n        <div class=\"col-sm-7\">\n            <input type=\"number\" class=\"form-control\" id=\"options-delay\" name=\"delay\" [(ngModel)]=\"data.delay\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"options-min-duration\" class=\"col-sm-5 form-control-label\">Min duration (ms)</label>\n        <div class=\"col-sm-7\">\n            <input type=\"number\" class=\"form-control\" id=\"options-min-duration\" name=\"minDuration\" [(ngModel)]=\"data.minDuration\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"options-message\" class=\"col-sm-5 form-control-label\">Message</label>\n        <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" id=\"options-message\" name=\"message\" [(ngModel)]=\"data.message\">\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"options-template\" class=\"col-sm-5 form-control-label\">Template</label>\n        <div class=\"col-sm-7\">\n            <select class=\"form-control c-select\" id=\"options-template\" name=\"template\" [(ngModel)]=\"templateType\" (change)=\"changeTemplate($event.target.value)\">\n                <option value=\"default\">Default</option>\n                <option value=\"custom\">Custom</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-5 form-control-label\">Backdrop</label>\n        <div class=\"col-sm-7\">\n            <label class=\"c-input c-checkbox\">\n                <input type=\"checkbox\" name=\"backdrop\" [(ngModel)]=\"data.backdrop\">\n                <span class=\"c-indicator\"></span>\n                Show\n            </label>\n        </div>\n    </div>\n    <div class=\"col-sm-offset-5 col-sm-7\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"playDemo()\">Demo</button>\n    </div>\n</form>\n"

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "/**\n * @file Options style\n * @author yumao<yuzhang.lille@gmail.com>\n */\n.c-checkbox {\n  line-height: 36px;\n}\n"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Table index
	 * @author yumao<yuzhang.lille@gmail.com>
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(77));


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file Component: Table
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
	var core_1 = __webpack_require__(4);
	var __1 = __webpack_require__(50);
	// import {IBusyConfig} from 'angular2-busy';
	var TableComponent = (function () {
	    function TableComponent() {
	    }
	    return TableComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", typeof (_a = typeof __1.IBusyConfig !== "undefined" && __1.IBusyConfig) === "function" && _a || Object)
	], TableComponent.prototype, "loading", void 0);
	TableComponent = __decorate([
	    core_1.Component({
	        selector: 'demo-table',
	        template: __webpack_require__(78),
	        styles: [__webpack_require__(79)]
	    })
	], TableComponent);
	exports.TableComponent = TableComponent;
	var _a;


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<table class=\"table\" [ngBusy]=\"loading\">\n    <thead class=\"thead-default\">\n        <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Species</th>\n            <th>Occupation</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <th scope=\"row\">1</th>\n            <td>Arthur Dent</td>\n            <td>Human</td>\n            <td>Radio Employee</td>\n        </tr>\n        <tr>\n            <th scope=\"row\">2</th>\n            <td>Ford Prefect</td>\n            <td>Betelgeusian</td>\n            <td>Researcher</td>\n        </tr>\n        <tr>\n            <th scope=\"row\">3</th>\n            <td>Marvin</td>\n            <td>Robot</td>\n            <td>Servant</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "/**\n * @file Table style\n * @author yumao<yuzhang.lille@gmail.com>\n */\n.table {\n  position: relative;\n}\n"

/***/ }
]);