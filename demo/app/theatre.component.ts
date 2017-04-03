import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-theatre',
  template: `
    <div>
      <!-- The Theatre Component -->
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
          <ngx-map-mesh
            imageSrc="assets/mountains.jpg">
          </ngx-map-mesh>
          <ngx-video
            url="http://stemkoski.github.io/Three.js/videos/sintel.ogv">
          </ngx-video>
        </ngx-scene>
      </ngx-renderer>

      <!-- Enable VR Mode -->
      <vr-toggle
        (toggle)="isVRMode = $event">
      </vr-toggle>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheatreComponent {

  isVRMode: boolean = false;

}
