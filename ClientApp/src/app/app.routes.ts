import { Routes } from '@angular/router';
import { DartboardComponent } from './components/dartboard/dartboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'darts',
    pathMatch: 'full',
  },
  {
    path: 'darts',
    component: DartboardComponent,
  },
];
