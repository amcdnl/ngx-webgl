import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent, SceneComponent, PerspectiveCameraComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent
  ],
  exports: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent
  ]
})
export class NgxWebGlModule { }
