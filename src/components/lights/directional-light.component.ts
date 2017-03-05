import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DirectionalLight } from 'three';

@Component({
  selector: 'ngx-directional-light',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectionalLightComponent implements OnInit {

  @Input() color: string = '#FFFFFF';
  @Input() position: number[] = [1, 1, 1];

  object: DirectionalLight;

  ngOnInit() {
    this.object = new DirectionalLight(this.color);
    this.setPosition(this.position);
  }

  setPosition(position) {
    this.object.position.set(
      position[0],
      position[1],
      position[2]);
  }

}
