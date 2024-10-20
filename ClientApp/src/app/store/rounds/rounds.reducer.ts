import { createReducer, on } from '@ngrx/store';
import { Round, RoundThrow } from '../../model/round';
import * as RoundsActions from './rounds.actions';

export interface RoundsState {
  currentRound: number;
  currentThrow: RoundThrow;
  rounds: Round[];
}

export const initialState: RoundsState = {
  currentRound: 1,
  currentThrow: 1,
  rounds: [{}],
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
  on(
    RoundsActions.setSelectedSegmentId,
    (state, { segmentId }): RoundsState => {
      const rounds = [...state.rounds];
      const round = { ...rounds[state.currentRound - 1] };
      round[state.currentThrow] = segmentId;
      rounds[state.currentRound - 1] = round;

      return {
        ...state,
        rounds: rounds,
      };
    }
  )
);
