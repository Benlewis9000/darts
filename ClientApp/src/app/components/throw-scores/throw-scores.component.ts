import { Component } from '@angular/core';
import { ThrowScore } from "../throw-score/throw-score.component";

@Component({
  selector: 'app-throw-scores',
  templateUrl: 'throw-scores.component.html',
  styleUrls: ['throw-scores.component.scss'],
  standalone: true,
  imports: [ThrowScore],
})
export class ThrowScores {}
