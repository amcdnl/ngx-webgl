import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <header>
        <h1>ngx-webgl <small><button (click)="onVrToggle()">VR</button></small></h1>
        <ngx-stats></ngx-stats>
      </header>
      <div class="container">
        <ngx-renderer>
          <ngx-orbit-controls></ngx-orbit-controls>
          <ngx-vr-controls
            [enabled]="isVRMode"
            [height]="height"
            [width]="width">
          </ngx-vr-controls>
          <ngx-scene>
            <ngx-perspective-camera></ngx-perspective-camera>
            <ngx-point-light></ngx-point-light>
            <ngx-text label="Hello"></ngx-text>
            <ngx-sphere
              *ngFor="let ball of balls"
              [positionY]="ball * 5"
              [positionX]="ball * 5"
              [positionZ]="0">
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
  balls = [1, 2, 3, 4, 5 ];
  isVRMode: boolean = false;

  onVrToggle(): void {
    this.isVRMode = !this.isVRMode;
  }

}
