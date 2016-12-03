import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ng2-popover';
import { DropdownModule } from 'ng2-dropdown';

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
