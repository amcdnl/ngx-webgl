import { Component, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { VRControls, VREffect } from 'three';
import 'webvr-polyfill';
import 'three/examples/js/controls/VRControls.js';
import 'three/examples/js/effects/VREffect.js';

@Component({
  selector: 'ngx-vr-controls',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VRControlsComponent implements OnDestroy {

  @Input() enabled: boolean = true;
  @Input() height: number;
  @Input() width: number;

  controls: any; // VRControls;
  effect: any; // VREffect;

  ngOnDestroy(): void {
    if(this.controls) this.controls.dispose();
    if(this.effect) this.effect.dispose();
  }

  setupControls(camera, renderer): void {
    if(!this.enabled) return;

    this.controls = new VRControls(camera);
    this.effect = new VREffect(renderer);
    this.setEffectSize(this.width, this.height);
    this.requestPresent();
  }

  setEffectSize(width: number, height: number): void {
    if(!this.effect) return;
    this.effect.setSize(width, height);
  }

  updateControls(scene, camera) {
    if(!this.controls || !this.effect) return;
    this.controls.update();
    this.effect.render(scene, camera);
  }

  requestPresent(): void {
    if(!this.effect) return;
    this.effect.requestPresent();
  }

  resetPose(): void {
    if(!this.controls) return;
    this.controls.resetPose();
  }

}
