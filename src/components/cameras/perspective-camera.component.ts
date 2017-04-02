import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PerspectiveCamera } from 'three';

@Component({
  selector: 'ngx-perspective-camera',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerspectiveCameraComponent implements OnInit {

  @Input() positions = [0, 150, 400];

  @Input()
  set height(val: number) {
    this._height = val;
    this.updateAspect();
  }

  get height(): number {
    return this._height;
  }

  @Input()
  set width(val: number) {
    this._width = val;
    this.updateAspect();
  }

  get width(): number {
    return this._width;
  }

  viewAngle: number = 50;
  near: number = 0.1;
  far: number = 1000;
  camera: PerspectiveCamera;

  _height: number = 0;
  _width: number = 0;

  get aspect(): number {
    return this.height / this.width;
  }

  ngOnInit(): void {
    this.camera = new PerspectiveCamera(
      this.viewAngle,
      this.aspect,
      this.near,
      this.far);

    this.camera.position.set(
      this.positions[0],
      this.positions[1],
      this.positions[2]);
  }

  updateAspect(ratio = this.aspect): void {
    if(!this.camera) return;
    this.camera.aspect = ratio;
    this.camera.updateProjectionMatrix();
  }

}
