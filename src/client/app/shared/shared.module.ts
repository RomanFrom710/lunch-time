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
    ErrorHandlingInterceptor,
    SocialAuthTypesService,
    SelectPointComponent,
    ShowPointComponent,
    BrowserWindowService
} from './';


const components = [ // Obviously everything that is declared in shared module should be exported too.
    HeaderComponent,
    EmptyLink,
    SelectPointComponent,
    ShowPointComponent
];

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot(),
        PopoverModule,
        DropdownModule,
        ToastModule,
        RouterModule
    ],
    declarations: components,
    exports: components,
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
