import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BusyService } from '../../src';
export declare class AppComponent implements OnInit {
    private http;
    private busyService;
    loading: {
        promise: any;
    };
    constructor(http: Http, busyService: BusyService);
    ngOnInit(): void;
}
