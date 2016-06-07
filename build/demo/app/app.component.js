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
var http_1 = require('@angular/http');
var src_1 = require('../../src');
var AppComponent = (function () {
    function AppComponent(http, busyService) {
        this.http = http;
        this.busyService = busyService;
        this.loading = {
            promise: null
        };
        console.log('hah1');
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
            template: require('./app.component.html'),
            styles: [require('./app.component.less')]
        }), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof src_1.BusyService !== 'undefined' && src_1.BusyService) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map