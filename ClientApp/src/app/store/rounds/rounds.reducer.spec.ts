import {
  setCurrentRound,
  setCurrentThrow,
  setSelectedSegmentId,
} from './rounds.actions';
import { initialState, roundsReducer, RoundsState } from './rounds.reducer';

describe('RoundsReducer', () => {
  describe('setCurrentRound action', () => {
    it('should update the current round immutably', () => {
      const action = setCurrentRound({ currentRound: 2 });
      const expectedState: RoundsState = {
        ...initialState,
        currentRound: 2,
      };
      const state = roundsReducer(initialState, action);
      expect(state).toEqual(expectedState);
      expect(state).not.toBe(initialState);
    });
  });
  describe('setCurrentThrow action', () => {
    it('should update the current throw immutably', () => {
      const action = setCurrentThrow({ currentThrow: 2 });
      const expectedState: RoundsState = {
        ...initialState,
        currentThrow: 2,
      };
      const state = roundsReducer(initialState, action);
      expect(state).toEqual(expectedState);
      expect(state).not.toBe(initialState);
    });
  });
  describe('setCurrentSelectedSegmentId action', () => {
    it('should update the current throw immutably', () => {
      const action = setSelectedSegmentId({ segmentId: 2 });
      const expectedState: RoundsState = {
        ...initialState,
        rounds: [{ 1: 2 }],
      };
      const state = roundsReducer(initialState, action);
      expect(state).toEqual(expectedState);
      expect(state).not.toBe(initialState);
    });
  });
});
