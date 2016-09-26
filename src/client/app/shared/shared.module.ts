import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { PopoverModule } from 'ng2-popover';

import { Config,
         HeaderComponent,
         AuthService,
         WindowService,
         BrowserWindowService } from './';

@NgModule({
    imports: [ PopoverModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        AuthService,
        Http
    ]
})
export class SharedModule { }
