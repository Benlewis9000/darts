import { createSelector } from '@ngrx/store';
import { RoundThrow } from '../../model/round';
import { RoundsState } from './rounds.reducer';

const selectState = (state: RoundsState) => state;

export const selectCurrentRound = createSelector(
  selectState,
  (state: RoundsState) => state.currentRound
);
export const selectCurrentThrow = createSelector(
  selectState,
  (state: RoundsState) => state.currentThrow
);
export const selectCurrentValue = createSelector(
  selectState,
  selectCurrentRound,
  selectCurrentThrow,
  (state: RoundsState, currentRound: number, currentThrow: RoundThrow) =>
    state.values[currentRound][currentThrow]
);

// TODO
export const selectValueForRoundAndThrow = (
  state: RoundsState,
  round: number,
  roundThrow: RoundThrow
) => state.values[round - 1][roundThrow];
