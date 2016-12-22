import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../shared';
import {
    CafeMapComponent,
    CafeListComponent,
    CafeService,
    CafeDetailsComponent } from './';


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot() ],
    declarations: [ CafeMapComponent, CafeListComponent, CafeDetailsComponent ],
    exports: [ CafeDetailsComponent ],
    providers: [ CafeService ]
})
export class CafeModule { }
