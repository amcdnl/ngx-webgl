import { Component, Input, OnInit } from '@angular/core';
import { PerspectiveCamera } from 'three';

@Component({
  selector: 'ngx-perspective-camera',
  template: `<ng-content></ng-content>`
})
export class PerspectiveCameraComponent implements OnInit {

  @Input() height: number = 500;
  @Input() width: number = 500;
  @Input() positions = [0, 0, 0];

  viewAngle: number = 75;
  near: number = 0.1;
  far: number = 10000;
  camera: PerspectiveCamera;

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

}
