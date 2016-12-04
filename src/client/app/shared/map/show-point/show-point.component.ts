import { Component, Input, OnInit } from '@angular/core';

import { Point } from '../';
import { Config } from '../../config';


@Component({
    selector: 'lt-show-point',
    templateUrl: 'show-point.component.html'
})
export class ShowPointComponent implements OnInit {
    @Input() mapHeight: string = '500px'; // Default value
    @Input() point: Point;

    private initialPoint: Point;
    private initialZoom: number = this.config.map.increasedZoom;

    constructor(private config: Config) { }

    ngOnInit(): void {
        this.initialPoint = this.point || this.config.map.initialPoint;
    }
}
