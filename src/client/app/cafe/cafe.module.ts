import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../shared';
import {
    CafeMapComponent,
    CafeListComponent,
    CafePreviewComponent } from './';


@NgModule({
    imports: [ SharedModule, AgmCoreModule.forRoot() ],
    declarations: [ CafeMapComponent, CafeListComponent, CafePreviewComponent ],
    exports: [ ],
    providers: [ ]
})
export class CafeModule { }
