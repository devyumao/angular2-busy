/**
 * @file Component: App
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

import {BusyService} from '../..';
import {GithubCornerComponent} from './github-corner';
import {HeaderComponent} from './header';
import {OptionsComponent} from './options';
import {TableComponent} from './table';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    providers: [Http, HTTP_PROVIDERS, BusyService],
    directives: [
        GithubCornerComponent,
        HeaderComponent,
        OptionsComponent,
        TableComponent
    ],
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
    }
}
