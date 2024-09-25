export type DartboardColor = 'light' | 'dark' | 'red' | 'green';

export const dartboardColors = {
  light: '$color-timberwolf',
  dark: '$color-gray-dark',
  red: '$color-rust',
  green: '$color-green',
};

export type Dartboard = Map<number, DartboardSlice>;

export type DartboardSlice = DartboardSegment[];

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
