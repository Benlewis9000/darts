import { Component, Input } from '@angular/core';
import { RoundsFacade } from '../../../../store/rounds/rounds.facade';
import { RoundThrow } from '../../../../model/round';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DartboardSegmentManager } from '../../../../services/dartboard-segment-manager.service';

@Component({
  selector: 'app-throw-score',
  templateUrl: 'throw-score.component.html',
  styleUrls: ['throw-score.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class ThrowScore {
  @Input('round')
  round: number = 1;

  @Input('roundThrow')
  roundThrow: RoundThrow = 1;

  constructor(
    private readonly roundsFacade: RoundsFacade,
    private readonly segmentManager: DartboardSegmentManager
  ) {}

  get scoreToDisplay(): Observable<string> {
    return this.roundsFacade.selectRounds$.pipe(
      map((rounds) => {
        if (rounds.length < this.round) {
          return undefined;
        }
        if (!rounds[this.round - 1][this.roundThrow]) {
          return undefined;
        }
        const segmentId = rounds[this.round - 1][this.roundThrow];
        if (!segmentId) {
          return undefined;
        }
        return this.segmentManager.getSegment(segmentId);
      }),
      map((segment) => {
        return `${
          segment?.value
            ? segment?.value.baseValue * segment.value.multiplier
            : '-'
        }`;
      })
    );
  }
}
