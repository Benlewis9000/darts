import { createReducer, on } from "@ngrx/store";
import { Round, RoundThrow } from "../../model/round";
import * as RoundsActions from './rounds.actions';

export interface RoundsState {
    currentRoundNumber: number,
    currentThrow: RoundThrow,
    values: Round[],
}

export const initialState: RoundsState = {
    currentRoundNumber: 1,
    currentThrow: 1,
    values: [],
}

export const roundsReducer = createReducer(
    initialState,
    on(RoundsActions.setCurrentRoundNumber, (state, {currentRoundNumber}) => ({
        ...state,
        currentRoundNumber
    })),
    on(RoundsActions.setCurrentThrow, (state, {currentThrow}) => ({
        ...state,
        currentThrow
    })),
    on(RoundsActions.setValue, (state, {value}) => {
        const values = [...state.values];
        values[state.currentRoundNumber - 1][state.currentThrow] = value;

        return ({
            ...state,
            value,
            values,
        });
    })
) 