import { Component, Input } from '@angular/core';

import { Config } from '../../shared';


@Component({
    selector: 'lt-cafe-map',
    templateUrl: 'cafe-map.component.html'
})
export class CafeMapComponent {
    @Input() mapHeight: string = '500px'; // Default value

    private initialLatitude: number = this.config.map.initialPoint[0];
    private initialLongitude: number = this.config.map.initialPoint[1];
    private initialZoom: number = this.config.map.initialZoom;

    constructor (private config: Config) { }
}
