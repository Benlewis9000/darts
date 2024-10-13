import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoundThrow } from '../../model/round';
import { RoundsState } from './rounds.reducer';

const selectRoundsState = createFeatureSelector<RoundsState>('rounds');

export const selectCurrentRound = createSelector(
  selectRoundsState,
  (state: RoundsState) => state.currentRound
);
export const selectCurrentThrow = createSelector(
  selectRoundsState,
  (state: RoundsState) => state.currentThrow
);
export const selectSelectedSegmentIdForRoundAndThrow = (
  round: number,
  roundThrow: RoundThrow
) =>
  createSelector(selectRoundsState, (state: RoundsState) =>
    // TODO how can we reduce this duplicated selection logic?
    round <= state.selectedSegmentIds.length
      ? state.selectedSegmentIds[round - 1][roundThrow]
      : undefined
  );
export const selectSelectedSegmentId = createSelector(
  selectRoundsState,
  selectCurrentRound,
  selectCurrentThrow,
  (state, round, roundThrow) =>
    round <= state.selectedSegmentIds.length
      ? state.selectedSegmentIds[round - 1][roundThrow]
      : undefined
);
