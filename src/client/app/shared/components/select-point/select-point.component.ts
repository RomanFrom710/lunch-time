import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';

import { Point, Config } from '../../';


@Component({
    selector: 'lt-select-point',
    templateUrl: 'select-point.component.html'
})
export class SelectPointComponent implements OnInit {
    @Input() mapHeight: string = '500px'; // Default value
    @Input() isEditMode = false;

    @Input() point: Point = null;
    @Output() pointChange: EventEmitter<Point> = new EventEmitter<Point>();

    private initialPoint: Point;
    private initialZoom: number = this.config.map.initialZoom;

    constructor(private config: Config) { }

    ngOnInit(): void {
        this.initialPoint = this.point || this.config.map.initialPoint;
    }

    deletePoint(): void {
        this.pointChange.emit(null);
    }

    private onClick(event: MouseEvent): void {
        if (!this.isEditMode) {
            return;
        }

        const coords: LatLngLiteral = event.coords;
        this.pointChange.emit(new Point(coords.lat, coords.lng));
    }
}
