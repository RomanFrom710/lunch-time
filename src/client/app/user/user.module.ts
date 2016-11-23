import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import {
    LocalSignInComponent,
    ProfileSettingsComponent,
    SignInScreenComponent,
    UserService
} from './';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        LocalSignInComponent,
        SignInScreenComponent,
        ProfileSettingsComponent
    ],
    exports: [ SignInScreenComponent ],
    providers: [ UserService ]
})
export class UserModule { }
