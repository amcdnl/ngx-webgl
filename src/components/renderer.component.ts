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

  @Input()
  set vrMode(val: boolean) {
    if(val) this.setupVR();
  }

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

    this.renderer.autoClear = true;
    this.renderer.setClearColor('#16191C', 1);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.floor(window.devicePixelRatio));

    this.camera.height = this.height;
    this.camera.width = this.width;

    if(this.scene.fog) {
      this.renderer.setClearColor(this.scene.fog.color);
    }

    if(this.orbitControls && !this.vrMode) {
      this.orbitControls.setupControls(this.camera.camera, this.renderer);
    }

    if(this.vrControls && this.vrMode) {
      this.setupVR();
    }

    this.ngZone.runOutsideAngular(this.render.bind(this));
  }

  render(): void {
    this.camera.camera.lookAt(this.scene.scene.position);

    if(this.orbitControls && !this.vrControls.enabled) {
      this.orbitControls.updateControls(this.scene.scene, this.camera.camera);
    }

    if(this.vrControls && this.vrControls.enabled) {
      this.vrControls.updateControls(this.scene.scene, this.camera.camera);
    } else {
      this.renderer.render(this.scene.scene, this.camera.camera);
    }

    if(this.scene.videoComps) {
      for(const vidComp of this.scene.videoComps.toArray()) {
        if (vidComp.video.readyState === vidComp.video.HAVE_ENOUGH_DATA) {
          vidComp.videoImageContext.drawImage(vidComp.video, 0, 0);
          if (vidComp.videoTexture) vidComp.videoTexture.needsUpdate = true;
        }
      }
    }

    requestAnimationFrame(() => this.ngZone.runOutsideAngular(this.render.bind(this)));
  }

  @HostListener('window:resize')
  private onWindowResize(): void {
    this.calcSize();
  }

  private calcSize(): void {
    if(this.autoSize) {
      this.height = window.innerHeight;
      this.width = window.innerWidth;

      if(this.renderer) {
        this.renderer.setSize(this.width, this.height);
      }

      if(this.camera) {
        this.camera.height = this.height;
        this.camera.width = this.width;
      }

      if(this.vrControls) {
        this.vrControls.height = this.height;
        this.vrControls.width = this.width;
      }
    }
  }

  private setupVR(): void {
    if(this.vrControls) {
      this.vrControls.enabled = true;
      this.vrControls.height = this.height;
      this.vrControls.width = this.width;
      this.vrControls.setupControls(this.camera.camera, this.renderer);
    }
  }

}
