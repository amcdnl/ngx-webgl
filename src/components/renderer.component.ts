import {
  Component, Input, ElementRef, AfterContentInit, OnInit, HostListener,
  ContentChild, ViewChild, ChangeDetectionStrategy, NgZone
} from '@angular/core';
import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';
import { SceneComponent } from './scene.component';
import { PerspectiveCameraComponent } from './cameras';
import { OrbitControlsComponent, VRControlsComponent } from './controls';

@Component({
  selector: 'ngx-renderer',
  template: `
    <canvas #canvas></canvas>
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RendererComponent implements OnInit, AfterContentInit {

  @Input() height: number = 500;
  @Input() width: number = 500;
  @Input() autoSize: boolean = true;

  @ContentChild(SceneComponent)
  scene: SceneComponent;

  @ContentChild(OrbitControlsComponent)
  orbitControls: OrbitControlsComponent;

  @ContentChild(VRControlsComponent)
  vrControls: VRControlsComponent;

  @ContentChild(PerspectiveCameraComponent, { descendants: true })
  camera: PerspectiveCameraComponent;

  @ViewChild('canvas') canvas: any;

  renderer: WebGLRenderer;

  constructor(private element: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.calcSize();
  }

  ngAfterContentInit(): void {
    this.renderer = new WebGLRenderer({
      antialias: true,
      clearAlpha: 1,
      alpha: true,
      preserveDrawingBuffer: true,
      canvas: this.canvas.nativeElement
    });

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

    if(this.scene.fog) {
      this.renderer.setClearColor(this.scene.fog.color);
    }

    this.camera.height = this.height;
    this.camera.width = this.width;

    if(this.orbitControls) {
      this.orbitControls.setupControls(this.camera.camera, this.renderer);
    }

    if(this.vrControls) {
      this.vrControls.setupControls(this.camera.camera, this.renderer);
    }

    this.ngZone.runOutsideAngular(this.render.bind(this));
  }

  render(): void {
    this.ngZone.runOutsideAngular(() => {
      this.camera.camera.lookAt(this.scene.scene.position);
      this.renderer.render(this.scene.scene, this.camera.camera);

      if(this.orbitControls) {
        this.orbitControls.updateControls(this.scene.scene, this.camera.camera);
      }

      if(this.vrControls) {
        this.vrControls.updateControls(this.scene.scene, this.camera.camera);
      }

      requestAnimationFrame(() => this.render());
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.calcSize();
  }

  calcSize(): void {
    if(this.autoSize) {
      const parent = this.element.nativeElement.parentNode;
      const { width, height } = parent.getBoundingClientRect();

      this.height = height;
      this.width = width;

      if(this.renderer) {
        this.renderer.setSize(this.width, this.height);
      }
    }
  }

}
