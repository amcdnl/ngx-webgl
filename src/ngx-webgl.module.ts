import { RendererFactoryV2, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDomRendererFactoryV2 } from './canvas-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  ObjectComponent,
  TextComponent,
  SphereComponent,
  OrbitControlsComponent,
  VRControlsComponent,
  StatsComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    VRControlsComponent,
    ObjectComponent,
    PointLightComponent,
    TextComponent,
    StatsComponent,
    OrbitControlsComponent,
    SphereComponent
  ],
  exports: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent,
    ObjectComponent,
    StatsComponent,
    TextComponent,
    SphereComponent,
    OrbitControlsComponent,
    VRControlsComponent
  ],
  providers: [
    CanvasDomRendererFactoryV2,
    {
      provide: RendererFactoryV2,
      useClass: CanvasDomRendererFactoryV2
    }
  ]
})
export class NgxWebGlModule { }
