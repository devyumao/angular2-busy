/**
 * @file Service: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {Injectable} from '@angular/core';

import {BusyConfig, IBusyConfig} from './busy-config';

@Injectable()
export class BusyService {
    private configValue: IBusyConfig = new BusyConfig();

    set config(config: IBusyConfig) {
        this.configValue = new BusyConfig(config);
    }

    get config() {
        return this.configValue;
    }
}
