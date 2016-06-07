import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {BusyDirective, BusyService} from '../../src';
// import {BusyDirective} from '../..';

@Component({
    selector: 'app',
    providers: [Http, HTTP_PROVIDERS, BusyService],
    directives: [BusyDirective],
    template: require('./app.component.html'),
    styles: [require('./app.component.less')]
})
export class AppComponent implements OnInit {
    loading = {
        promise: null
    }

    constructor(private http: Http, private busyService: BusyService) {
        busyService.config = {
            message: 'Please wait...'
        };
    }

    ngOnInit() {
        this.loading.promise = this.http.get('http://httpbin.org/delay/3')
            .toPromise();
    }
}
