import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SignInComponent } from './sign-in';
import { AuthService, UserService } from './shared';

@NgModule({
    imports: [ HttpModule ],
    declarations: [ SignInComponent ],
    providers: [ AuthService, UserService ],
    exports: [ SignInComponent ]
})
export class UserModule { }
