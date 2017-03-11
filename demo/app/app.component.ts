import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <header>
        <h1>ngx-webgl
          <small>
            <button
            (click)="isVRMode = !isVRMode()">
              VR
            </button>
          </small>
        </h1>
        <ngx-stats></ngx-stats>
      </header>
      <div class="container">
        <ngx-renderer>
          <ngx-orbit-controls
            [enabled]="!isVRMode">
          </ngx-orbit-controls>
          <ngx-vr-controls
            [enabled]="isVRMode"
            [height]="height"
            [width]="width">
          </ngx-vr-controls>
          <ngx-scene>
            <ngx-perspective-camera></ngx-perspective-camera>
            <ngx-directional-light></ngx-directional-light>
            <ngx-ambient-light></ngx-ambient-light>
            <ngx-text label="Hello"></ngx-text>
            <ngx-sphere
              *ngFor="let ball of balls"
              [positionY]="ball.y"
              [positionX]="ball.x"
              [positionZ]="ball.z">
            </ngx-sphere>
          </ngx-scene>
        </ngx-renderer>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  height: number;
  width: number;
  balls: any[] = this.createSpheres();
  isVRMode: boolean = false;

  createSpheres(): any[] {
    const result = [];
    for(let i = 0; i < 50; i++) {
      result.push({
        x: (Math.random() - 0.5) * 100,
        y:  (Math.random() - 0.5) * 100,
        z: (Math.random() - 0.5) * 100
      });
    }
    return result;
  }

}
