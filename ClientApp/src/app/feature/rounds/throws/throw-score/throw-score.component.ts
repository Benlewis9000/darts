import { Component, Input } from '@angular/core';
import { RoundsFacade } from '../../../../store/rounds/rounds.facade';
import { RoundThrow } from '../../../../model/round';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-throw-score',
  templateUrl: 'throw-score.component.html',
  styleUrls: ['throw-score.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ThrowScore {
  @Input('round')
  round: number = 0;

  @Input('roundThrow')
  roundThrow: RoundThrow = 1;

  constructor(readonly roundsFacade: RoundsFacade) {}

  get scoreToDisplay(): Observable<string> {
    return this.roundsFacade
      .valueForRoundAndThrow$(this.round, this.roundThrow)
      .pipe(
        distinctUntilChanged(),
        tap((value) =>
          console.log(
            `scoreToDisplay, ${this.round}, ${this.roundThrow}: ${value?.baseValue}, ${value?.multiplier}`
          )
        ),
        map((value) => `${value ? value.baseValue * value.multiplier : '-'}`)
      );
  }
}
