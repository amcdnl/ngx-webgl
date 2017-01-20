import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxWebGlModule } from '../../src';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWebGlModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
