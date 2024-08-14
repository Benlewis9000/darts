import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { setCurrentRoundNumber, setCurrentThrow } from './rounds.actions';
import { Round, RoundThrow } from '../../model/round';
import { DartBoardSegment } from '../../model/dart-board';
import { selectCurrentRoundNumber } from './rounds.selector';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class RoundsFacade {
  store = Inject(Store);

  setCurrentRound(activeRound: number) {
    // TODO
  }
  setActiveThrow(activeThrow: RoundThrow) {
    // TODO
  }

  get currentRoundNumber() {
    return this.store.selectCurrentRoundNumber();
  }
  get currentThrow(): Observable<number> {
    return of(0);
  }
  get currentValue(): Observable<DartBoardSegment | undefined> {
    return of(undefined);
  }
}
