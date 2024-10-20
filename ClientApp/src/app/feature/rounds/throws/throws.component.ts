import { Component } from '@angular/core';
import { ThrowScore } from "./throw-score/throw-score.component";
import { ThrowScores } from "./throw-scores/throw-scores.component";

@Component({
  selector: 'app-throws',
  templateUrl: 'throws.component.html',
  styleUrls: ['throws.component.scss'],
  standalone: true,
  imports: [ThrowScore, ThrowScores],
})
export class Throws {}
