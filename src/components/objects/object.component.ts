import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'ngx-object',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectComponent {

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

  private _positionX: number = 0;
  private _positionY: number = 0;
  private _positionZ: number = 0;

}
