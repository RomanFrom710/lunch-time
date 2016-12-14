import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    AdminPanelComponent,
    ManageCafesComponent,
    AddCafeComponent,
    ManageUsersComponent
} from './';
import { CafeModule } from '../cafe';


@NgModule({
    imports: [ RouterModule, CafeModule ],
    declarations: [
        AdminPanelComponent,
        ManageCafesComponent,
        AddCafeComponent,
        ManageUsersComponent
    ],
    exports: [ ],
    providers: [ ],
})
export class AdminModule { }
