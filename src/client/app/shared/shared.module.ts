import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ng2-popover';
import { DropdownModule } from 'ng2-dropdown';
import { ToastModule } from 'ng2-toastr';

import {
    Config,
    EmptyLink,
    HeaderComponent,
    UserStore,
    AuthService,
    WindowService,
    ErrorHandlingInterceptor,
    BrowserWindowService
} from './';


@NgModule({
    imports: [
        CommonModule,
        PopoverModule,
        DropdownModule,
        ToastModule,
        RouterModule
    ],
    declarations: [ HeaderComponent, EmptyLink ],
    exports: [ HeaderComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        UserStore,
        AuthService,
        ErrorHandlingInterceptor
    ]
})
export class SharedModule { }
