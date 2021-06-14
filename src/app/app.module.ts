import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {Test01Component} from './test01/test01.component';
import {Test02Component} from './test02/test02.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Test03Component } from './test03/test03.component';
import { ButtonComponent } from './test01/button/button.component';

//import service
import { DataService } from './test01/data.service'
import { ToggleService } from './toggle.service';
import { MatchWidthDirective } from './test01/match-width.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component,
    Test03Component,
    ButtonComponent,
    MatchWidthDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers:[
    DataService,
    ToggleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
