import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cafe, CafeService, CafeDetailsComponent } from '../../../cafe';


@Component({
    selector: 'lt-add-cafe',
    templateUrl: 'add-cafe.component.html'
})
export class AddCafeComponent {
    private cafe: Cafe = new Cafe();
    @ViewChild('cafeDetails') cafeDetails: CafeDetailsComponent;

    constructor(private cafeService: CafeService,
                private router: Router,
                private currentRoute: ActivatedRoute) { }

    addCafe(): void {
        if (!this.cafeDetails.validate()) {
            return;
        }

        this.cafeService.addCafe(this.cafe)
            .subscribe(() => this.router.navigate(['../'], { relativeTo: this.currentRoute }));
    }
}
