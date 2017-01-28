import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cafe, CafeService, CafeQuery } from '../';
import { Config } from '../../shared';


@Component({
    selector: 'lt-cafe-list',
    templateUrl: 'cafe-list.component.html'
})
export class CafeListComponent {
    private query: CafeQuery = new CafeQuery();
    private cafes: Observable<Cafe[]>;
    private page: Number;
    private total: Number;

    constructor(private cafeService: CafeService,
                private config: Config) {
        this.query.itemsPerPage = config.cafe.itemsPerPage;
        this.pageChanged(1);
    }

    private get paginateQuery() {
        return {
            itemsPerPage: this.query.itemsPerPage,
            currentPage: this.query.page,
            totalItems: this.total
        };
    }

    private pageChanged(pageNumber: Number): void {
        this.query.page = pageNumber;
        this.cafes = this.cafeService.getAll(this.query).map(response => {
            this.page = pageNumber;
            this.total = response.total;
            return response.data;
        });
    }
}
