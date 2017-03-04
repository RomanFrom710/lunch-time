import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ngx-popover';
import { DropdownModule } from 'ngx-dropdown';

import { HeaderComponent, MainPageComponent, NotFoundComponent } from './';
import { UserModule } from '../user';
import { SharedModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PopoverModule,
        DropdownModule,
        SharedModule,
        UserModule
    ],
    declarations: [ MainPageComponent, NotFoundComponent, HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [ ]
})
export class InfoModule { }
