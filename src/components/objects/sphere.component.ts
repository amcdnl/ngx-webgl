import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Mesh, SphereGeometry, MeshNormalMaterial } from 'three';

@Component({
  selector: 'ngx-sphere',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SphereComponent implements OnInit {

  @Input()
  set rotationZ(val: number) {
    this._rotationZ = val;
    if(this.object && this.object.rotation.x !== val) {
      this.object.rotation.x = val;
    }
  }

  get rotationZ(): number {
    return this._rotationZ;
  }

  @Input()
  set rotationX(val: number) {
    this._rotationX = val;
    if(this.object && this.object.position.x !== val) {
      this.object.rotation.x = val;
    }
  }

  get rotationX(): number {
    return this._rotationX;
  }

 @Input()
  set positionX(val: number) {
    this._positionX = val;
    if(this.object && this.object.position.x !== val) {
      this.object.position.x = val;
    }
  }

  get positionX(): number {
    return this._positionX;
  }

  @Input()
  set positionY(val: number) {
    this._positionY = val;
    if(this.object && this.object.position.y !== val) {
      this.object.position.y = val;
    }
  }

  get positionY(): number {
    return this._positionY;
  }

  @Input()
  set positionZ(val: number) {
    this._positionZ = val;
    if(this.object && this.object.position.z !== val) {
      this.object.position.z = val;
    }
  }

  get positionZ(): number {
    return this._positionZ;
  }

  object: Mesh;
  private _rotationZ: number = 0;
  private _rotationX: number = 0;
  private _positionX: number = 0;
  private _positionY: number = 0;
  private _positionZ: number = 0;

  ngOnInit(): void {
    const geometry = new SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    const material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
    const sphere = new Mesh(geometry, material);

    sphere.position.y = this.positionY;
    sphere.position.x = this.positionX;
    sphere.position.z = this.positionZ;

    sphere.castShadow = true;
    sphere.receiveShadow = true;

    this.object = sphere;
  }

}
