import { initialState, RoundsState } from './rounds.reducer';
import {
  selectCurrentRound,
  selectCurrentThrow,
  selectSelectedSegmentId,
  selectSelectedSegmentIdForRoundAndThrow,
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
        selectedSegmentIds: [{}, { 3: expected }],
      };
      const result = selectSelectedSegmentId.projector(state, 2, 3);
      expect(result).toEqual(expected);
    });
    it('should return undefined if the current round is not found', () => {
      const state: RoundsState = {
        currentRound: 2,
        currentThrow: 3,
        selectedSegmentIds: [{}],
      };
      const result = selectSelectedSegmentId.projector(state, 2, 3);
      expect(result).toBeUndefined;
    });
  });
  describe('selectSelectedSegmentIdForRoundAndThrow', () => {
    it('should select the selected segment id for the given round and throw', () => {
      const expected = 50;
      const state: RoundsState = {
        ...initialState,
        selectedSegmentIds: [{}, { 3: expected }],
      };
      const result = selectSelectedSegmentIdForRoundAndThrow(2, 3).projector(
        state
      );
      expect(result).toEqual(expected);
    });
    it('should return undefined if the round does not exist', () => {
      const result = selectSelectedSegmentIdForRoundAndThrow(2, 1).projector(
        initialState
      );
      expect(result).toBeUndefined;
    });
    it('should return undefined if the throw does not exist', () => {
      const result = selectSelectedSegmentIdForRoundAndThrow(1, 1).projector(
        initialState
      );
      expect(result).toBeUndefined;
    });
  });
});
