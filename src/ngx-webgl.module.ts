import { RendererFactoryV2, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDomRendererFactoryV2 } from './canvas-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  FogComponent,
  ObjectComponent,
  TextComponent,
  DirectionalLightComponent,
  AmbientLightComponent,
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
    FogComponent,
    VRControlsComponent,
    ObjectComponent,
    AmbientLightComponent,
    PointLightComponent,
    DirectionalLightComponent,
    TextComponent,
    StatsComponent,
    OrbitControlsComponent,
    SphereComponent
  ],
  exports: [
    RendererComponent,
    SceneComponent,
    AmbientLightComponent,
    FogComponent,
    PerspectiveCameraComponent,
    DirectionalLightComponent,
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
