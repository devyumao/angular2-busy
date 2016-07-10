/**
 * @file main
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app'

enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS]);
