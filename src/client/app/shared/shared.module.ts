import { NgModule }      from '@angular/core';
import { PopoverModule } from 'ng2-popover';

import { HeaderComponent } from './header';
import { AuthService } from './auth';

@NgModule({
    imports: [ PopoverModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: 'config', useValue: process.env.CONFIG },
        AuthService
    ]
})
export class SharedModule { }
