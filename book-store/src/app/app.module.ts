import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  //component in this module
  declarations: [
    AppComponent
  ],
  //import module it depend on
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //entry point for module
  bootstrap: [AppComponent]
})
export class AppModule { }
