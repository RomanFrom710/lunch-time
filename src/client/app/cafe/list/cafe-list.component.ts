import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Cafe, CafeService, CafeQuery } from '../';
import { AuthService, User } from '../../user';
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
    private currentUser: Observable<User>;

    constructor(authService: AuthService,
                private cafeService: CafeService,
                private config: Config) {
        this.query.itemsPerPage = config.cafe.itemsPerPage;
        this.pageChanged(1);
        this.currentUser = authService.currentUser;
    }

    private get paginateQuery() {
        return {
            itemsPerPage: this.query.itemsPerPage,
            currentPage: this.query.page,
            totalItems: this.total
        };
    }

    private update() {
        this.cafes = this.cafeService.getAll(this.query).map(response => {
            this.page = this.query.page;
            this.total = response.total;
            return response.data;
        });
    }

    private pageChanged(pageNumber: Number): void {
        this.query.page = pageNumber;
        this.update();
    }
}
