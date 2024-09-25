import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoundThrow } from '../../model/round';
import { DartboardValue } from '../../model/dartboard';
import { Store } from '@ngrx/store';
import { RoundsState } from './rounds.reducer';

import * as selectors from './rounds.selector';
import * as actions from './rounds.actions';

@Injectable({
  providedIn: 'root',
})
export class RoundsFacade {
  constructor(private readonly store: Store<RoundsState>) {}

  setCurrentRound(activeRound: number) {
    this.store.dispatch(
      actions.setCurrentRoundNumber({ currentRoundNumber: activeRound })
    );
  }
  setActiveThrow(activeThrow: RoundThrow) {
    this.store.dispatch(actions.setCurrentThrow({ currentThrow: activeThrow }));
  }

  get currentRoundNumber$(): Observable<number> {
    return this.store.select(selectors.selectCurrentRoundNumber);
  }
  get currentThrow(): Observable<number> {
    return this.store.select(selectors.selectCurrentThrow);
  }
  get currentValue(): Observable<DartboardValue | undefined> {
    return this.store.select(selectors.selectCurrentValue);
  }
}
