import { Component, Input, Output, OnChanges } from '@angular/core';
import { MouseEvent, LatLngLiteral } from 'angular2-google-maps/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Point } from '../';
import { Config } from '../../config';


@Component({
    selector: 'lt-select-point',
    templateUrl: 'select-point.component.html'
})
export class SelectPointComponent implements OnChanges {
    @Input() mapHeight: string = '500px'; // Default value
    @Input() point: Point = null;

    @Output() pointChange: Observable<Point>;

    private initialPoint: Point = this.config.map.initialPoint;
    private initialZoom: number = this.config.map.initialZoom;
    private currentPoint: BehaviorSubject<Point>;

    constructor(private config: Config) {
        this.currentPoint = new BehaviorSubject(null);
        this.pointChange = this.currentPoint.asObservable();
    }

    ngOnChanges(): void {
        if (this.point) {
            this.currentPoint.next(this.point);
        }
    }

    deletePoint(): void {
        this.currentPoint.next(null);
    }

    private onClick(event: MouseEvent) {
        const coords: LatLngLiteral = event.coords;
        this.currentPoint.next(new Point(coords.lat, coords.lng));
    }
}
