import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import {
    LocalSignInComponent,
    ProfileSettingsComponent,
    SignInScreenComponent,
    UserDetailsComponent,
    UserService
} from './';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        LocalSignInComponent,
        SignInScreenComponent,
        UserDetailsComponent,
        ProfileSettingsComponent
    ],
    exports: [ SignInScreenComponent ],
    providers: [ UserService ]
})
export class UserModule { }
