import { NgModule }      from '@angular/core';
import { PopoverModule } from 'ng2-popover';

import { HeaderComponent } from './header';
import { AuthService } from './auth';

@NgModule({
    imports: [ PopoverModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [ AuthService ]
})
export class SharedModule { }
