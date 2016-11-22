import { Component } from '@angular/core';

import { Config } from '../../shared';


@Component({
    selector: 'lt-profile-settings',
    templateUrl: 'profile-settings.component.html'
})
export class ProfileSettingsComponent {
    private initialLatitude: number = this.config.map.initialPoint[0];
    private initialLongitude: number = this.config.map.initialPoint[1];
    private initialZoom: number = this.config.map.initialZoom;

    constructor(private config: Config) { }

    private onClick(a) {
        console.log(a);
    }
}
