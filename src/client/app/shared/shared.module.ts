import { NgModule } from '@angular/core';
import { PopoverModule } from 'ng2-popover';

import { Config,
         HeaderComponent,
         AuthService,
         WindowService
         BrowserWindowService } from './';

@NgModule({
    imports: [ PopoverModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        AuthService
    ]
})
export class SharedModule { }
