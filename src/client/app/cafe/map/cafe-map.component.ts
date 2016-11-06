import { Component, Input } from '@angular/core';

import { Config } from '../../shared';


@Component({
    selector: 'lt-cafe-map',
    templateUrl: './cafe-map.component.html'
})
export class CafeMapComponent {
    @Input() mapHeight: string = '500px'; // Default value

    private initialLatitude: number;
    private initialLongitude: number;
    private initialZoom: number;

    constructor (private config: Config) {
        [this.initialLatitude, this.initialLongitude] = config.map.initialPoint;
        this.initialZoom = config.map.initialZoom;
    }
}
