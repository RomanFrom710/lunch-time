import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../shared';
import {
    CafeMapComponent,
    CafeListComponent,
    CafeService,
    CafeDetailsComponent } from './';


@NgModule({
    imports: [ SharedModule, AgmCoreModule.forRoot() ],
    declarations: [ CafeMapComponent, CafeListComponent, CafeDetailsComponent ],
    exports: [ CafeDetailsComponent ],
    providers: [ CafeService ]
})
export class CafeModule { }
