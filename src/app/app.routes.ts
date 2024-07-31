import { Routes } from '@angular/router';
import { DartBoardComponent } from './components/dart-board/dart-board.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'darts',
        pathMatch: 'full'
    },
    {
        path: 'darts',
        component: DartBoardComponent,
    }
];
