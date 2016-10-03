import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { SignInComponent, UserService } from './';


@NgModule({
    imports: [ SharedModule ],
    declarations: [ SignInComponent ],
    providers: [ UserService ],
    exports: [ SignInComponent ]
})
export class UserModule { }
