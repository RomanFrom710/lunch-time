import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ng2-popover';
import { DropdownModule } from 'ng2-dropdown';
import { ToastModule } from 'ng2-toastr';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
    Config,
    EmptyLink,
    HeaderComponent,
    UserStore,
    AuthService,
    WindowService,
    UserMenuService,
    MapComponent,
    ErrorHandlingInterceptor,
    SocialAuthTypesService,
    BrowserWindowService
} from './';


@NgModule({
    imports: [
        CommonModule,
        PopoverModule,
        DropdownModule,
        ToastModule,
        AgmCoreModule.forRoot(),
        RouterModule
    ],
    declarations: [ HeaderComponent, MapComponent, EmptyLink ],
    exports: [ HeaderComponent, MapComponent ],
    providers: [
        { provide: Config, useValue: process.env.CONFIG },
        { provide: WindowService, useClass: BrowserWindowService },
        UserStore,
        AuthService,
        UserMenuService,
        SocialAuthTypesService,
        ErrorHandlingInterceptor
    ]
})
export class SharedModule { }
