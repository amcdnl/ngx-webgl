import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <h1>Hello</h1>

      <ngx-stats></ngx-stats>
      <ngx-renderer>
        <ngx-scene>
          <ngx-perspective-camera></ngx-perspective-camera>
          <ngx-point-light></ngx-point-light>
        </ngx-scene>
      </ngx-renderer>
    </div>
  `
})
export class AppComponent { }
