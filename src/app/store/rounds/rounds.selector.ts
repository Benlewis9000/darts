import { createSelector } from '@ngrx/store';
import { RoundThrow } from '../../model/round';
import { RoundsState } from './rounds.reducer';

const selectState = (state: RoundsState) => state;

export const selectCurrentRoundNumber = createSelector(
  selectState,
  (state: RoundsState) => state.currentRoundNumber
);
export const selectCurrentThrow = createSelector(
  selectState,
  (state: RoundsState) => state.currentThrow
);
export const selectCurrentValue = createSelector(
  selectState,
  selectCurrentRoundNumber,
  selectCurrentThrow,
  (state: RoundsState, currentRoundNumber: number, currentThrow: RoundThrow) =>
    state.values[currentRoundNumber][currentThrow]
);

// TODO
export const selectValueForRoundAndThrow = (
  state: RoundsState,
  round: number,
  roundThrow: RoundThrow
) => state.values[round - 1][roundThrow];
