import { Routes } from '@angular/router';
import { SpheresComponent } from './spheres.component';
import { TheatreComponent } from './theatre.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/spheres',
    pathMatch: 'full'
  },
  {
    path: 'spheres',
    component: SpheresComponent
  },
  {
    path: 'theatre',
    component: TheatreComponent
  }
];
