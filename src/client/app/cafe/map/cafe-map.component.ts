import { Component, Input } from '@angular/core';

import { Config, Point } from '../../shared';


@Component({
    selector: 'lt-cafe-map',
    templateUrl: 'cafe-map.component.html'
})
export class CafeMapComponent {
    @Input() mapHeight: string = '500px'; // Default value

    private initialPoint: Point = this.config.map.initialPoint;
    private initialZoom: number = this.config.map.initialZoom;

    constructor (private config: Config) { }
}
