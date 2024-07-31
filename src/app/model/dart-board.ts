export type DartBoardColor = 'light' | 'dark' | 'red' | 'green'

export const dartBoardColors = {
    light: '$color-timberwolf',
    dark: '$color-gray-dark',
    red: '$color-rust',
    green: '$color-green',
}

export type DartBoard = Map<number, DartBoardSegment>

export type DartBoardSegment = DartBoardValue[]

export interface DartBoardValue {
    baseValue: number,
    multiplier: number,
    displayName: string,
    baseColor?: DartBoardColor,
    selected?: boolean;
}