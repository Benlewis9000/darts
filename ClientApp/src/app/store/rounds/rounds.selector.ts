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
export const selectCurrentValue = createSelector(
  selectRoundsState,
  selectCurrentRound,
  selectCurrentThrow,
  (state: RoundsState, currentRound: number, currentThrow: RoundThrow) => {
    if (!state.values[currentRound - 1]) {
      return undefined;
    }
    return state.values[currentRound - 1][currentThrow];
  }
);

// TODO
export const selectValueForRoundAndThrow = (
  state: RoundsState,
  round: number,
  roundThrow: RoundThrow
) => state.values[round - 1][roundThrow];
