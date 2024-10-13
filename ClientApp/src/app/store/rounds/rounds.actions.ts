import { createAction, props } from '@ngrx/store';
import { RoundThrow } from '../../model/round';

export const setCurrentRound = createAction(
  '[Rounds] Current round number set',
  props<{ currentRound: number }>()
);
export const setCurrentThrow = createAction(
  '[Rounds] Current throw set',
  props<{ currentThrow: RoundThrow }>()
);
export const setSelectedSegmentId = createAction(
  '[Rounds] Segment ID for current throw set',
  props<{ segmentId: number | undefined }>()
);
