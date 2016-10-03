import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared';
import { UserModule } from './user';
import { AppComponent }  from './app.component';


@NgModule({
    imports: [ SharedModule, UserModule, BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
