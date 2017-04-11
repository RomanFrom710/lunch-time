import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
    AdminPanelComponent,
    ManageCafesComponent,
    AddCafeComponent,
    ManageUsersComponent,
    AddUserComponent,
    AdminService
} from './';
import { CafeModule } from '../cafe';
import { UserModule } from '../user';
import { SharedModule } from '../shared';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpModule,
        FormsModule,
        CafeModule,
        UserModule,
        SharedModule
    ],
    declarations: [
        AdminPanelComponent,
        ManageCafesComponent,
        AddCafeComponent,
        ManageUsersComponent,
        AddUserComponent
    ],
    exports: [ ],
    providers: [ AdminService ],
})
export class AdminModule { }
