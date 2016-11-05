import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CafeMapComponent, CafeListComponent } from './cafe';
import { MainPageComponent, NotFoundComponent } from './info';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'map', component: CafeMapComponent },
            { path: 'places', component: CafeListComponent },
            { path: '', component: MainPageComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
