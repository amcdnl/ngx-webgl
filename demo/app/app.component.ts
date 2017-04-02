import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <!-- Header -->
      <header>
        <button
          class="hamburger-menu"
          (click)="menuActive = !menuActive">
          <div class="bar" [class.active]="menuActive"></div>
        </button>
      </header>

      <!-- Stats -->
      <ngx-stats></ngx-stats>

      <!-- Page Nav -->
      <nav *ngIf="menuActive">
        <ul>
          <li>
            <button
              (click)="menuActive = false"
              routerLink="/spheres"
              routerLinkActive="active">
              Spheres
            </button>
          </li>
          <li>
            <button
              routerLink="/theatre"
              (click)="menuActive = false"
              routerLinkActive="active">
              Theatre
            </button>
          </li>
        </ul>
      </nav>

      <!-- WebGL Stuff -->
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  menuActive: boolean = false;

}
