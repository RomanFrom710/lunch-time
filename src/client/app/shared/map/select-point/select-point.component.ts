import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';

import { Point } from '../';
import { Config } from '../../config';


@Component({
    selector: 'lt-select-point',
    templateUrl: 'select-point.component.html'
})
export class SelectPointComponent {
    @Input() mapHeight: string = '500px'; // Default value
    @Input() point: Point = null;
    @Output() pointChange: EventEmitter<Point> = new EventEmitter<Point>();

    private initialPoint: Point = this.config.map.initialPoint;
    private initialZoom: number = this.config.map.initialZoom;

    constructor(private config: Config) { }

    deletePoint(): void {
        this.pointChange.emit(null);
    }

    private onClick(event: MouseEvent) {
        const coords: LatLngLiteral = event.coords;
        this.pointChange.emit(new Point(coords.lat, coords.lng));
    }
}
