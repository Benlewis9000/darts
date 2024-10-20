export type RoundThrow = 1 | 2 | 3;

/** For each incrementing round, store the selected segment ID for each throw. */
export type Round = {
  // [RoundThrow: Segment ID | undefined]
  [K in RoundThrow]?: number | undefined;
};
