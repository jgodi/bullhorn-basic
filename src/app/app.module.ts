import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NovoElementsModule, NovoElementProviders } from "novo-elements";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NovoElementsModule,
    NovoElementProviders.forRoot(),
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
