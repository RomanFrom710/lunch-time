import { NgModule,  } from '@angular/core';
import { PopoverModule } from 'ng2-popover';
import { ToastModule } from 'ng2-toastr';
import { HttpModule, XHRBackend } from '@angular/http';

import { Config,
         HeaderComponent,
         AuthService,
         WindowService,
         CustomConnectionBackend,
         BrowserWindowService } from './';


@NgModule({
    imports: [ PopoverModule, HttpModule, ToastModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        { provide: XHRBackend, useClass: CustomConnectionBackend },
        AuthService
    ]
})
export class SharedModule { }
