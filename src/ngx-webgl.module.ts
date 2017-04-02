import { RendererFactory2, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDomRendererFactory } from './canvas-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  FogComponent,
  TextComponent,
  DirectionalLightComponent,
  AmbientLightComponent,
  SphereComponent,
  OrbitControlsComponent,
  VideoComponent,
  VRControlsComponent,
  StatsComponent,
  MapMeshComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    FogComponent,
    VRControlsComponent,
    AmbientLightComponent,
    PointLightComponent,
    VideoComponent,
    DirectionalLightComponent,
    TextComponent,
    StatsComponent,
    OrbitControlsComponent,
    SphereComponent,
    MapMeshComponent
  ],
  exports: [
    RendererComponent,
    SceneComponent,
    AmbientLightComponent,
    FogComponent,
    PerspectiveCameraComponent,
    VideoComponent,
    DirectionalLightComponent,
    PointLightComponent,
    StatsComponent,
    TextComponent,
    SphereComponent,
    OrbitControlsComponent,
    VRControlsComponent,
    MapMeshComponent
  ],
  providers: [
    CanvasDomRendererFactory,
    {
      provide: RendererFactory2,
      useClass: CanvasDomRendererFactory
    }
  ]
})
export class NgxWebGlModule { }
