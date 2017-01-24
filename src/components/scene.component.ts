import { Component, AfterContentInit, ContentChildren, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { Scene } from 'three';
import { PerspectiveCameraComponent } from './cameras';
import { PointLightComponent } from './lights';
import { ObjectComponent, SphereComponent } from './objects';

@Component({
  selector: 'ngx-scene',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SceneComponent implements AfterContentInit {

  @ContentChild(PerspectiveCameraComponent)
  camera: PerspectiveCameraComponent;

  @ContentChildren(PointLightComponent)
  lightComps: any;

  @ContentChildren(SphereComponent)
  sphereComps: any;

  scene: Scene = new Scene();

  ngAfterContentInit(): void {
    this.camera.camera.lookAt(this.scene.position);
    this.scene.add(this.camera.camera);

    const meshes = [
      ...this.lightComps.toArray(),
      ...this.sphereComps.toArray()
    ];

    for(const mesh of meshes) {
      this.scene.add(mesh.object);
    }
  }

}
