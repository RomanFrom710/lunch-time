import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { UserStore } from './store';  // UserStore is internal, so it's not in the barrel
import {
    LocalSignInComponent,
    ProfileSettingsComponent,
    SignInScreenComponent,
    UserDetailsComponent,
    UserMenuService,
    SocialAuthTypesService,
    GenderPipe,
    AuthService,
    UserService,
    AuthHandlingInterceptor
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
        GenderPipe,
        ProfileSettingsComponent
    ],
    exports: [ SignInScreenComponent, GenderPipe ],
    providers: [
        UserStore,
        AuthService,
        SocialAuthTypesService,
        UserService,
        UserMenuService,
        AuthHandlingInterceptor
    ]
})
export class UserModule { }
