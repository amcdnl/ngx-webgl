import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PointLight } from 'three';

@Component({
  selector: 'ngx-point-light',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointLightComponent implements OnInit {

  @Input() color: string = '#FFFFFF';
  @Input() position: number[] = [0, 250, 0];

  object: PointLight;

  ngOnInit() {
    this.object = new PointLight(this.color);
    this.setPosition(this.position);
  }

  setPosition(position) {
    this.object.position.set(
      position[0],
      position[1],
      position[2]);
  }

}
