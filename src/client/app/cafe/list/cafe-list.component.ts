import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cafe, CafeService, CafeQuery } from '../';
import { PaginationResult } from '../../shared';


@Component({
    selector: 'lt-cafe-list',
    templateUrl: 'cafe-list.component.html'
})
export class CafeListComponent {
    private query: CafeQuery = new CafeQuery();
    private cafes: Observable<PaginationResult<Cafe>> = this.cafeService.getAll(this.query);

    constructor(private cafeService: CafeService) { }
}
