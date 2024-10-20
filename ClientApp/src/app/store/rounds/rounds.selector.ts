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
    trySelectSegmentId(state, round, roundThrow)
  );

export const selectSelectedSegmentId = createSelector(
  selectRoundsState,
  selectCurrentRound,
  selectCurrentThrow,
  (state, round, roundThrow) => trySelectSegmentId(state, round, roundThrow)
);

// Utils

const trySelectSegmentId = (
  state: RoundsState,
  round: number,
  roundThrow: RoundThrow
): number | undefined => {
  try {
    return state.selectedSegmentIds[round - 1][roundThrow];
  } catch {
    return undefined;
  }
};
