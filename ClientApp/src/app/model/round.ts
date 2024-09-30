import { DartboardValue } from './dartboard';

export type RoundThrow = 1 | 2 | 3;

export type Round = {
  [K in RoundThrow]?: DartboardValue | undefined;
};

// TODO should Round be an interface? It'll require a Map, and then can't be used in the NgRX store, so the bigger question is should Rounds and their associated values be in the NgRX store?
export interface RoundInterfacePrototype {
  throws: Map<RoundThrow, DartboardValue>;
}
