import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ng2-popover';
import { ToastModule } from 'ng2-toastr';

import { Config,
         HeaderComponent,
         AuthService,
         WindowService,
         ErrorHandlingInterceptor,
         BrowserWindowService } from './';


@NgModule({
    imports: [ CommonModule, PopoverModule, ToastModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        ErrorHandlingInterceptor,
        AuthService
    ]
})
export class SharedModule { }
