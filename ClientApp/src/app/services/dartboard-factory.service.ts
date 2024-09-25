import { Injectable } from '@angular/core';
import { Dartboard, DartboardSlice } from '../model/dartboard';

const dartboardRange = 20;

@Injectable({
  providedIn: 'root',
})
export class DartboardFactory {
  createDartboard(): Dartboard {
    const slices = new Map<number, DartboardSlice>();

    // Missed value
    slices.set(0, {
      segments: [
        {
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
            value: {
              baseValue: i,
              multiplier: 1,
            },
            displayName: i.toString(),
            baseColor: baseColor,
          },
          {
            value: {
              baseValue: i,
              multiplier: 2,
            },
            displayName: 'x2',
            baseColor: multiplierColor,
          },
          {
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
          value: {
            baseValue: 25,
            multiplier: 1,
          },
          displayName: 'OUTER BULL',
          baseColor: 'green',
        },
        {
          value: {
            baseValue: 25,
            multiplier: 2,
          },
          displayName: 'INNER BULL',
          baseColor: 'red',
        },
      ],
    });

    return {
      slices,
    };
  }
}
