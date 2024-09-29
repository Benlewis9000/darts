export type DartboardColor = 'light' | 'dark' | 'red' | 'green';

export const DARTBOARD_COLORS = {
  light: '--color-timberwolf',
  dark: '--color-gray-dark',
  red: '--color-rust',
  green: '--color-green',
};

export interface Dartboard {
  slices: Map<number, DartboardSlice>;
}

export interface DartboardSlice {
  segments: DartboardSegment[];
}

export interface DartboardSegment {
  value: DartboardValue;
  displayName: string;
  baseColor: DartboardColor;
  selected?: boolean;
}

export interface DartboardValue {
  baseValue: number;
  multiplier: number;
}
