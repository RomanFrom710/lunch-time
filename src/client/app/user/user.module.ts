import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { SignInComponent, UserService } from './';


@NgModule({
    imports: [ SharedModule ],
    declarations: [ SignInComponent ],
    exports: [ SignInComponent ],
    providers: [ UserService ]
})
export class UserModule { }
