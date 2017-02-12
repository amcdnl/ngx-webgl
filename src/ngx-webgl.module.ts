import { RootRenderer, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRootRenderer } from './canvas-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  ObjectComponent,
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
    SphereComponent,
    OrbitControlsComponent,
    VRControlsComponent
  ],
  providers: [
    {
      provide: RootRenderer,
      useClass: CanvasRootRenderer
    }
  ]
})
export class NgxWebGlModule { }
