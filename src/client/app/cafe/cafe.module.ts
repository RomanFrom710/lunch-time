import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import {
    CafeMapComponent,
    CafeListComponent,
    CafePreviewComponent } from './';


@NgModule({
    imports: [ SharedModule ],
    declarations: [ CafeMapComponent, CafeListComponent, CafePreviewComponent ],
    exports: [ ],
    providers: [ ]
})
export class CafeModule { }
