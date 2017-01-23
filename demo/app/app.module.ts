import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxWebGlModule, NgxStatsModule } from '../../src';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWebGlModule, NgxStatsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
