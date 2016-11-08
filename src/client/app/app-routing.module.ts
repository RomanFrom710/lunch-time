import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CafeMapComponent, CafeListComponent } from './cafe';
import { MainPageComponent, NotFoundComponent } from './info';
import { SignInScreenComponent } from './user';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'map', component: CafeMapComponent },
            { path: 'places', component: CafeListComponent },
            { path: 'login', component: SignInScreenComponent },
            { path: '', component: MainPageComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
