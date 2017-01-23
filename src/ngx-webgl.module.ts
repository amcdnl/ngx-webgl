import { RootRenderer, NgModule, APP_INITIALIZER, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryRootRenderer, setUpRenderFlushing } from './in-memory-renderer';

import {
  RendererComponent,
  SceneComponent,
  PerspectiveCameraComponent,
  PointLightComponent,
  StatsComponent
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent,
    StatsComponent
  ],
  exports: [
    RendererComponent,
    SceneComponent,
    PerspectiveCameraComponent,
    PointLightComponent,
    StatsComponent
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
