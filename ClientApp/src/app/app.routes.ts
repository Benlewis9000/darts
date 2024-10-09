import { Routes } from '@angular/router';
import { DartsPage as DartsPage } from './components/darts-page/darts-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'darts',
    pathMatch: 'full',
  },
  {
    path: 'darts',
    component: DartsPage,
  },
];
