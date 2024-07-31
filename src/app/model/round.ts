import { DartBoardValue } from "./dart-board";

export type RoundThrow = 1 | 2 | 3;

export interface Round {
    1?: DartBoardValue,
    2?: DartBoardValue,
    3?: DartBoardValue,
}