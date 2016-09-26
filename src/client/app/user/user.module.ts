import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared';
import { SignInComponent, UserService } from './';

@NgModule({
    imports: [ HttpModule, SharedModule ],
    declarations: [ SignInComponent ],
    providers: [ UserService ],
    exports: [ SignInComponent ]
})
export class UserModule { }
