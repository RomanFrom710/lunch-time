import { NgModule }      from '@angular/core';
import { PopoverModule } from 'ng2-popover';

import { UserModule } from '../user';
import { HeaderComponent } from './header';

@NgModule({
    imports: [ PopoverModule, UserModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})
export class SharedModule { }
