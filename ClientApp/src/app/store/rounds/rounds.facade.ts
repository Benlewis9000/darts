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

  setCurrentRound(currentRound: number) {
    this.store.dispatch(actions.setCurrentRound({ currentRound }));
  }
  setCurrentThrow(currentThrow: RoundThrow) {
    this.store.dispatch(actions.setCurrentThrow({ currentThrow }));
  }
  setSelectedValue(value: DartboardValue) {
    this.store.dispatch(actions.setValue({ value }));
  }

  get currentRound$(): Observable<number> {
    return this.store.select(selectors.selectCurrentRound);
  }
  get currentThrow$(): Observable<number> {
    return this.store.select(selectors.selectCurrentThrow);
  }
  get currentValue$(): Observable<DartboardValue | undefined> {
    return this.store.select(selectors.selectCurrentValue);
  }
}
