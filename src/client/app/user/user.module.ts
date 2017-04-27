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
    RegisterComponent,
    UserDetailsComponent,
    UserMenuService,
    SocialAuthTypesService,
    GenderPipe,
    UserTypePipe,
    AuthService,
    AuthGuard,
    RegisterGuard,
    UserService,
    AuthHandlingInterceptor,
    CorsInterceptor
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
        RegisterComponent,
        GenderPipe,
        UserTypePipe,
        ProfileSettingsComponent
    ],
    exports: [ SignInScreenComponent, GenderPipe, UserTypePipe ],
    providers: [
        UserStore,
        AuthService,
        SocialAuthTypesService,
        UserService,
        UserMenuService,
        AuthGuard,
        RegisterGuard,
        AuthHandlingInterceptor,
        CorsInterceptor
    ]
})
export class UserModule { }
