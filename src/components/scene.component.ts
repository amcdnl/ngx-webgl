import { Component, AfterContentInit } from '@angular/core';
import { Scene } from 'three';

@Component({
  selector: 'ngx-scene',
  template: `<ng-content></ng-content>`
})
export class SceneComponent implements AfterContentInit {

  scene: Scene = new Scene();

  ngAfterContentInit(): void {
    // todo
  }

}
