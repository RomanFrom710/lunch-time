import { Component, Input } from '@angular/core';

import { Point } from '../';
import { Config } from '../../config';


@Component({
    selector: 'lt-show-point',
    templateUrl: 'show-point.component.html'
})
export class ShowPointComponent {
    @Input() mapHeight: string = '500px'; // Default value
    @Input() point: Point;

    private initialLatitude: number = this.config.map.initialPoint[0];
    private initialLongitude: number = this.config.map.initialPoint[1];
    private initialZoom: number = this.config.map.increasedZoom;

    constructor(private config: Config) { }
}
