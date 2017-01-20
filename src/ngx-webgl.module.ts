import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  StatsComponent,
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StatsComponent,
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent
  ],
  exports: [
    StatsComponent,
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent
  ]
})
export class NgxWebGlModule { }
