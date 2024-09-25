import { DartboardValue } from './dartboard';

export type RoundThrow = 1 | 2 | 3;

export type Round = {
  [K in RoundThrow]?: DartboardValue;
};
