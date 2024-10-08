import { createAction, props } from '@ngrx/store';
import { RoundThrow } from '../../model/round';
import { DartboardValue } from '../../model/dartboard';

export const setCurrentRound = createAction(
  '[Rounds] Current round number set',
  props<{ currentRound: number }>()
);
export const setCurrentThrow = createAction(
  '[Rounds] Current throw set',
  props<{ currentThrow: RoundThrow }>()
);
export const setValue = createAction(
  '[Rounds] Value for current throw set',
  props<{ value: DartboardValue | undefined }>()
);
