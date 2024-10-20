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

export const selectRounds = createSelector(
  selectRoundsState,
  (state: RoundsState) => state.rounds
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
    return state.rounds[round - 1][roundThrow];
  } catch {
    return undefined;
  }
};
