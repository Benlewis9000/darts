import { createReducer, on } from '@ngrx/store';
import { Round, RoundThrow } from '../../model/round';
import * as RoundsActions from './rounds.actions';

export interface RoundsState {
  currentRound: number;
  currentThrow: RoundThrow;
  // roundsById: number[]; // [0] -> value ID for first round
  values: Round[];
}

export const initialState: RoundsState = {
  currentRound: 1,
  currentThrow: 1,
  values: [{}],
};

export const roundsReducer = createReducer(
  initialState,
  on(
    RoundsActions.setCurrentRound,
    (state, { currentRound }): RoundsState => ({
      ...state,
      currentRound,
    })
  ),
  on(
    RoundsActions.setCurrentThrow,
    (state, { currentThrow }): RoundsState => ({
      ...state,
      currentThrow,
    })
  ),
  on(RoundsActions.setValue, (state, { value }): RoundsState => {
    const values = [...state.values];
    const round = { ...values[state.currentRound - 1] };
    round[state.currentThrow] = value;
    values[state.currentRound - 1] = round;

    return {
      ...state,
      values,
    };
  })
);
