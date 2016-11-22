import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../shared';
import {
    LocalSignInComponent,
    ProfileSettingsComponent,
    SignInScreenComponent,
    UserService
} from './';


@NgModule({
    imports: [
        AgmCoreModule.forRoot(), // But it's not root... Our app is modular, there is no roots!
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
