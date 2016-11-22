import { Component, Input } from '@angular/core';

import { Config } from '../';


@Component({
    selector: 'lt-map',
    templateUrl: 'map.component.html'
})
export class MapComponent {
    @Input() mapHeight: string = '500px'; // Default value

    private initialLatitude: number;
    private initialLongitude: number;
    private initialZoom: number;

    constructor (private config: Config) {
        [this.initialLatitude, this.initialLongitude] = config.map.initialPoint;
        this.initialZoom = config.map.initialZoom;
    }
}
