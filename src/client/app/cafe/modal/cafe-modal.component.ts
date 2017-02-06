import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cafe } from '../';


@Component({
    selector: 'lt-cafe-modal',
    templateUrl: 'cafe-modal.component.html'
})
export class CafeModalComponent implements OnInit {
    private cafe: Cafe;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.cafe = this.route.snapshot.data['cafe'];
    }
}
