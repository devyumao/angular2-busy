import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {BusyModule, BusyConfig} from '../..';
// import {BusyModule, BusyConfig} from 'angular2-busy';
import {AppComponent} from './app.component';
import {GithubCornerComponent} from './github-corner';
import {HeaderComponent} from './header';
import {OptionsComponent} from './options';
import {TableComponent} from './table';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BusyModule,
        BrowserAnimationsModule
        // BusyModule.forRoot(new BusyConfig({
        //     message: 'test',
        //     backdrop: false
        // }))
    ],
    declarations: [
        AppComponent,
        GithubCornerComponent,
        HeaderComponent,
        OptionsComponent,
        TableComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
