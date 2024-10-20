import { Component } from '@angular/core';
import { DartboardComponent } from '../../feature/dartboard/dartboard/dartboard.component';
import { ThrowSelector } from '../../feature/rounds/throws/throw-selector/throw-selector.component';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { ThrowScores } from '../../feature/rounds/throws/throw-scores/throw-scores.component';
import { Throws } from '../../feature/rounds/throws/throws.component';

@Component({
  selector: 'app-darts-page',
  templateUrl: 'darts-page.component.html',
  styleUrls: ['darts-page.component.scss'],
  standalone: true,
  imports: [
    DartboardComponent,
    ThrowSelector,
    PageLayoutComponent,
    ThrowScores,
    Throws,
  ],
})
export class DartsPage {}
