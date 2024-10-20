import { initialState, RoundsState } from './rounds.reducer';
import {
  selectCurrentRound,
  selectCurrentThrow,
  selectSelectedSegmentId,
} from './rounds.selector';

describe('rounds selector', () => {
  describe('selectCurrentRound', () => {
    it('should select the current round of the initial state', () => {
      const result = selectCurrentRound.projector(initialState);
      expect(result).toEqual(initialState.currentRound);
    });
  });
  describe('selectCurrentThrow', () => {
    it('should select the current throw of the initial state', () => {
      const result = selectCurrentThrow.projector(initialState);
      expect(result).toEqual(initialState.currentThrow);
    });
  });
  describe('selectSelectedSegmentId', () => {
    it('should select the selected segment id for the current round and throw', () => {
      const expected = 50;
      const state: RoundsState = {
        currentRound: 2,
        currentThrow: 3,
        rounds: [{}, { 3: expected }],
      };
      const result = selectSelectedSegmentId.projector(state, 2, 3);
      expect(result).toEqual(expected);
    });
    it('should return undefined if the current round is not found', () => {
      const state: RoundsState = {
        currentRound: 2,
        currentThrow: 3,
        rounds: [{}],
      };
      const result = selectSelectedSegmentId.projector(state, 2, 3);
      expect(result).toBeUndefined;
    });
  });
});
