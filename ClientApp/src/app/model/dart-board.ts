export type DartBoardColor = 'light' | 'dark' | 'red' | 'green'

export const dartBoardColors = {
    light: '$color-timberwolf',
    dark: '$color-gray-dark',
    red: '$color-rust',
    green: '$color-green',
}

export type DartBoard = Map<number, DartBoardSlice>

export type DartBoardSlice = DartBoardSegment[]

export interface DartBoardSegment {
    value: DartBoardValue,
    displayName: string,
    baseColor?: DartBoardColor,
    selected?: boolean;
}

export interface DartBoardValue {
    baseValue: number,
    multiplier: number,
}