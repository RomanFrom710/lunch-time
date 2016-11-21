import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    AdminPanelComponent,
    ManageCafesComponent,
    ManageUsersComponent
} from './';


@NgModule({
    imports: [ RouterModule ],
    declarations: [ AdminPanelComponent, ManageCafesComponent, ManageUsersComponent ],
    exports: [ ],
    providers: [ ],
})
export class AdminModule { }
