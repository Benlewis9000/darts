import { Injectable } from '@angular/core';
import { Dartboard, DartboardSlice } from '../model/dartboard';
import { DartboardSegmentManager } from './dartboard-segment-manager.service';

const dartboardRange = 20;

@Injectable({
  providedIn: 'root',
})
export class DartboardFactory {
  // TODO protect this number better, can easily be changed accidentally
  count: number = 0;

  constructor(
    private readonly dartboardSegmentManager: DartboardSegmentManager
  ) {}

  initSegmentDefaults = () => {
    this.count++;
    return {
      id: this.count,
      selected: false,
    };
  };

  createDartboard(): Dartboard {
    const slices = new Map<number, DartboardSlice>();

    // Missed value
    slices.set(0, {
      segments: [
        {
          ...this.initSegmentDefaults(),
          value: {
            baseValue: 0,
            multiplier: 1,
          },
          displayName: 'MISSED',
          baseColor: 'dark',
        },
      ],
    });

    // Number values, with multipliers
    for (let i = 1; i <= dartboardRange; i++) {
      const baseColor = i % 2 == 0 ? 'dark' : 'light';
      const multiplierColor = i % 2 == 0 ? 'red' : 'green';
      slices.set(i, {
        segments: [
          {
            ...this.initSegmentDefaults(),
            value: {
              baseValue: i,
              multiplier: 1,
            },
            displayName: i.toString(),
            baseColor: baseColor,
          },
          {
            ...this.initSegmentDefaults(),
            value: {
              baseValue: i,
              multiplier: 2,
            },
            displayName: 'x2',
            baseColor: multiplierColor,
          },
          {
            ...this.initSegmentDefaults(),
            value: {
              baseValue: i,
              multiplier: 3,
            },
            displayName: 'x3',
            baseColor: multiplierColor,
          },
        ],
      });
    }

    // Outer and inner bullseye
    slices.set(25, {
      segments: [
        {
          ...this.initSegmentDefaults(),
          value: {
            baseValue: 25,
            multiplier: 1,
          },
          displayName: 'OUTER BULL',
          baseColor: 'green',
        },
        {
          ...this.initSegmentDefaults(),
          value: {
            baseValue: 25,
            multiplier: 2,
          },
          displayName: 'INNER BULL',
          baseColor: 'red',
        },
      ],
    });

    const dartboard: Dartboard = { slices };
    this.dartboardSegmentManager.registerDartboard(dartboard);
    return dartboard;
  }
}
