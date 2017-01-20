import { Component, AfterContentInit, ContentChildren, ContentChild } from '@angular/core';
import { Scene } from 'three';
import { PerspectiveCameraComponent } from './cameras';
import { PointLightComponent } from './lights';

@Component({
  selector: 'ngx-scene',
  template: `<ng-content></ng-content>`
})
export class SceneComponent implements AfterContentInit {

  @ContentChild(PerspectiveCameraComponent)
  camera: PerspectiveCameraComponent;

  @ContentChildren(PointLightComponent)
  lightComps: any;

  scene: Scene = new Scene();

  ngAfterContentInit(): void {
    this.camera.camera.lookAt(this.scene.position);
    this.scene.add(this.camera.camera);

    const meshes = [
      ...this.lightComps.toArray()
    ];

    for(const mesh of meshes) {
      this.scene.add(mesh.object);
    }
  }

}
