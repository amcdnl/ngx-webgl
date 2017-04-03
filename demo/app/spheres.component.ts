import { Component, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { requestFullScreen } from '../../src';

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
export class SpheresComponent {

  count: number = 50;
  balls: any[] = this.createSpheres();
  isVRMode: boolean = false;

  constructor(private element: ElementRef) { }

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
