import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodeComponent,
    EncodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
