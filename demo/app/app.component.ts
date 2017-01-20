import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <h1>Hello</h1>

      <ngx-renderer>
        <ngx-perspective-camera></ngx-perspective-camera>
        <ngx-scene></ngx-scene>
      </ngx-renderer>
    </div>
  `
})
export class AppComponent { }
