import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CafeService, Cafe } from '../';
import { Config, Point } from '../../shared';


@Component({
    selector: 'lt-cafe-map',
    templateUrl: 'cafe-map.component.html'
})
export class CafeMapComponent {
    @Input() mapHeight: string = '500px'; // Default value

    private initialPoint: Point = this.config.map.initialPoint;
    private initialZoom: number = this.config.map.initialZoom;

    private cafes: Observable<Cafe[]> = this.cafeService.getCoords();

    constructor (private config: Config,
                 private cafeService: CafeService) { }
}
