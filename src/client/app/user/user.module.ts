import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import {
    SocialSignInComponent,
    LocalSignInComponent,
    SignInScreenComponent,
    UserService
} from './';


@NgModule({
    imports: [ SharedModule, RouterModule, FormsModule ],
    declarations: [ SocialSignInComponent, LocalSignInComponent, SignInScreenComponent ],
    exports: [ SocialSignInComponent, SignInScreenComponent ],
    providers: [ UserService ]
})
export class UserModule { }
