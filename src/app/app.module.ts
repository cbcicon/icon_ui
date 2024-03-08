import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lock1Component } from './components/login-page/lock-1/lock-1.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { Logo2Component } from './components/login-page/logo-2/logo-2.component';
import { Person1Component } from './components/login-page/person-1/person-1.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, Logo2Component, Person1Component, Lock1Component, LoginPageComponent],
  imports: [BrowserModule , AuthModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
