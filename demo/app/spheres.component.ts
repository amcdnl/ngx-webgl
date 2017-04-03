import { Component, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit, ViewChildren, NgZone } from '@angular/core';
import { requestFullScreen, SphereComponent } from '../../src';

@Component({
  selector: 'app-spheres',
  template: `
    <div>
      <!-- The Sphere Component -->
      <ngx-renderer [vrMode]="isVRMode" class="container">
        <ngx-orbit-controls
          [enabled]="!isVRMode">
        </ngx-orbit-controls>
        <ngx-vr-controls
          [enabled]="isVRMode">
        </ngx-vr-controls>
        <ngx-scene>
          <ngx-perspective-camera></ngx-perspective-camera>
          <ngx-directional-light></ngx-directional-light>
          <ngx-ambient-light></ngx-ambient-light>
          <ngx-sphere
            *ngFor="let ball of balls"
            [positionY]="ball.y"
            [positionX]="ball.x"
            [positionZ]="ball.z">
          </ngx-sphere>
        </ngx-scene>
      </ngx-renderer>

      <!-- Enable VR Mode -->
      <vr-toggle
        (toggle)="isVRMode = $event"
        (fullscreen)="onFullScreen()">
      </vr-toggle>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpheresComponent implements AfterViewInit {

  count: number = 50;
  balls: any[] = this.createSpheres();
  isVRMode: boolean = false;

  @ViewChildren(SphereComponent, { descendants: true }) spheres: any;

  constructor(private element: ElementRef, private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.animate();
  }

  animate() {
    const balls = this.spheres.toArray();
    const zone = this.ngZone;

    let circleRotation = Math.random() * Math.PI * 2;
    const circle = Math.floor((Math.random() * 100) + 300);
    const size = Math.random();

    function animate() {
      for(const shape of balls) {
        shape.positionZ = Math.cos(circleRotation) * circle;
        circleRotation += 0.002;
      }

      zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
    }

    zone.runOutsideAngular(() => requestAnimationFrame(() => animate()));
  }

  createSpheres(): any[] {
    const result = [];
    for(let i = 0; i < this.count; i++) {
      result.push({
        x: (Math.random() - 0.5) * 250,
        y:  (Math.random() - 0.5) * 250,
        z: (Math.random() - 0.5) * 250
      });
    }
    return result;
  }

  onFullScreen(): void {
    requestFullScreen(document.body);
  }

}
