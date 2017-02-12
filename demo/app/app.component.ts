import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <header>
        <h1>ngx-webgl</h1>
        <ngx-stats></ngx-stats>
      </header>
      <div class="container">
        <ngx-renderer>
          <ngx-orbit-controls></ngx-orbit-controls>
          <ngx-scene>
            <ngx-perspective-camera></ngx-perspective-camera>
            <ngx-point-light></ngx-point-light>
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

  balls = [1, 2, 3, 4, 5 ];

}
