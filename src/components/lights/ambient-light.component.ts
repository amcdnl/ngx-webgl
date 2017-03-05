import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AmbientLight } from 'three';

@Component({
  selector: 'ngx-ambient-light',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbientLightComponent implements OnInit {

  @Input() color: string = '#222222';
  @Input() position: number[] = [1, 1, 1];

  object: AmbientLight;

  ngOnInit() {
    this.object = new AmbientLight(this.color);
    this.setPosition(this.position);
  }

  setPosition(position) {
    this.object.position.set(
      position[0],
      position[1],
      position[2]);
  }

}
