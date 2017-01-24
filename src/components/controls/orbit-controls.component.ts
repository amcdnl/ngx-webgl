import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { OrbitControls, Scene } from 'three';
import 'three/examples/js/controls/OrbitControls.js';

@Component({
  selector: 'ngx-orbit-controls',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrbitControlsComponent {

  @Input() enabled: boolean = true;

  controls: OrbitControls;

  setupControls(camera, renderer) {
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enabled = this.enabled;
  }

  updateControls(scene: Scene, camera) {
    this.controls.update();
  }

}
