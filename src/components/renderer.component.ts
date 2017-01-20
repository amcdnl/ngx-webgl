import { Component, Input, ElementRef, AfterContentInit, ContentChild } from '@angular/core';
import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';
import { SceneComponent } from './scene.component';
import { PerspectiveCameraComponent } from './cameras';

@Component({
  selector: 'ngx-renderer',
  template: `<ng-content></ng-content>`
})
export class RendererComponent implements AfterContentInit {

  @Input() height: number = 300;
  @Input() width: number = 300;

  @ContentChild(SceneComponent) scene: SceneComponent;
  @ContentChild(PerspectiveCameraComponent) camera: PerspectiveCameraComponent;

  renderer: WebGLRenderer = new WebGLRenderer({
    antialias: true
  });

  constructor(private element: ElementRef) { }

  ngAfterContentInit(): void {
    this.renderer.setSize(this.width, this.height);
    this.element.nativeElement.appendChild(this.renderer.domElement);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));
    this.render();
  }

  render(): void {
    this.renderer.render(this.scene.scene, this.camera.camera);
    requestAnimationFrame(() => this.render());
  }

}
