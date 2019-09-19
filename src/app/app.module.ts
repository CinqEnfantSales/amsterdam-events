import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './components/mainpage/components.mainpage.header';
import { Body } from './components/mainpage/components.mainpage.home';
import { Navbar } from './components/mainpage/components.mainpage.nav-bar';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Body,
    Navbar
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
