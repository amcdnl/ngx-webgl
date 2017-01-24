import { RootRenderer, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryRootRenderer, setUpRenderFlushing } from './in-memory-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  ObjectComponent,
  SphereComponent,
  OrbitControlsComponent,
  StatsComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
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
    OrbitControlsComponent
  ]
  /*
  providers: [
    {
      provide: RootRenderer,
      useClass: InMemoryRootRenderer
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: setUpRenderFlushing,
      deps: [ NgZone, RootRenderer ]
    }
  ]
  */
})
export class NgxWebGlModule { }
