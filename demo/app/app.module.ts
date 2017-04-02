import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxWebGlModule } from '../../src';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { VRToggleComponent } from './vr-toggle.component';
import { SpheresComponent } from './spheres.component';
import { TheatreComponent } from './theatre.component';

@NgModule({
  declarations: [
    AppComponent,
    SpheresComponent,
    TheatreComponent,
    VRToggleComponent
  ],
  imports: [
    BrowserModule,
    NgxWebGlModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
