import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { SignInComponent, UserMenuComponent, UserService } from './';


@NgModule({
    imports: [ SharedModule ],
    declarations: [ SignInComponent, UserMenuComponent ],
    exports: [ SignInComponent, UserMenuComponent ],
    providers: [ UserService ]
})
export class UserModule { }
