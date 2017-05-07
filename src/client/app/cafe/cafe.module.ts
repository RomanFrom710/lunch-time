import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ImageUploadModule } from 'ng2-imageupload';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalModule } from 'ngx-modal';

import { SharedModule } from '../shared';
import {
    CafeMapComponent,
    CafeListComponent,
    CafeService,
    CafeDetailsComponent,
    CafeModalComponent,
    CafePricesComponent,
    CafeResolve
} from './';


@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule,
        Ng2PaginationModule,
        ImageUploadModule,
        ModalModule,
        FileUploadModule,
        AgmCoreModule.forRoot()
    ],
    declarations: [
        CafeMapComponent,
        CafeListComponent,
        CafeDetailsComponent,
        CafePricesComponent,
        CafeModalComponent
    ],
    exports: [ CafeDetailsComponent ],
    providers: [ CafeService, CafeResolve ]
})
export class CafeModule { }
