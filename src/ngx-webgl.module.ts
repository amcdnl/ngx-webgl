import { RendererFactory2, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDomRendererFactory } from './canvas-renderer';

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
    ObjectComponent,
    AmbientLightComponent,
    PointLightComponent,
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
    DirectionalLightComponent,
    PointLightComponent,
    ObjectComponent,
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
