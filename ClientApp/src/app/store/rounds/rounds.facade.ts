import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { RoundThrow } from '../../model/round';
import { DartboardSegment, DartboardValue } from '../../model/dartboard';
import { Store } from '@ngrx/store';
import { RoundsState } from './rounds.reducer';

import * as selectors from './rounds.selector';
import * as actions from './rounds.actions';
import { DartboardSegmentManager } from '../../services/dartboard-segment-manager.service';

@Injectable({
  providedIn: 'root',
})
export class RoundsFacade {
  constructor(
    private readonly store: Store<RoundsState>,
    private readonly dartboardSegmentManager: DartboardSegmentManager
  ) {}

  setCurrentRound(currentRound: number) {
    this.store.dispatch(actions.setCurrentRound({ currentRound }));
  }
  setCurrentThrow(currentThrow: RoundThrow) {
    this.store.dispatch(actions.setCurrentThrow({ currentThrow }));
  }
  setSelectedSegment(segment: DartboardSegment) {
    this.store.dispatch(
      actions.setSelectedSegmentId({ segmentId: segment.id })
    );
  }

  get currentRound$(): Observable<number> {
    return this.store.select(selectors.selectCurrentRound);
  }
  get currentThrow$(): Observable<number> {
    return this.store.select(selectors.selectCurrentThrow);
  }
  get selectedSegmentId$(): Observable<number | undefined> {
    return this.store.select(selectors.selectSelectedSegmentId);
  }
  get selectedSegment$(): Observable<DartboardSegment | undefined> {
    return this.selectedSegmentId$.pipe(
      map((id) =>
        id !== undefined
          ? this.dartboardSegmentManager.getSegment(id)
          : undefined
      )
    );
  }
  get currentValue$(): Observable<DartboardValue | undefined> {
    return this.selectedSegment$.pipe(map((segment) => segment?.value));
  }
}
