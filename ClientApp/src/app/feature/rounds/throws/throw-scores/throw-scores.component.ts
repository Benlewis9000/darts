import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ThrowScore } from '../throw-score/throw-score.component';
import { RoundsFacade } from '../../../../store/rounds/rounds.facade';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-throw-scores',
  templateUrl: 'throw-scores.component.html',
  styleUrls: ['throw-scores.component.scss'],
  standalone: true,
  imports: [ThrowScore, AsyncPipe],
})
export class ThrowScores implements OnInit {
  private _round: number = 0;
  private destroyRef = inject(DestroyRef);

  constructor(private readonly roundsFacade: RoundsFacade) {}

  ngOnInit(): void {
    this.roundsFacade.currentRound$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((round) => (this._round = round));
  }

  get round() {
    return this._round;
  }
}
