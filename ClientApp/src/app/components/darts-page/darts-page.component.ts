import { Component } from '@angular/core';
import { DartboardComponent } from '../dartboard/dartboard.component';
import { ThrowSelector } from '../throw-selector/throw-selector.component';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { ThrowScores } from "../throw-scores/throw-scores.component";

@Component({
  selector: 'app-darts-page',
  templateUrl: 'darts-page.component.html',
  styleUrls: ['darts-page.component.scss'],
  standalone: true,
  imports: [DartboardComponent, ThrowSelector, PageLayoutComponent, ThrowScores],
})
export class DartsPage {}
