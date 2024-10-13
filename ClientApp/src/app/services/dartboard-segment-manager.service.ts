import { Injectable } from '@angular/core';
import { Dartboard, DartboardSegment } from '../model/dartboard';

@Injectable({
  providedIn: 'root',
})
export class DartboardSegmentManager {
  readonly segments: Map<number, DartboardSegment> = new Map();

  registerDartboard(dartboard: Dartboard) {
    dartboard.slices.forEach((slice) => {
      slice.segments.forEach((segment) => {
        this.registerValue(segment);
      });
    });
  }

  getSegment(segmentId: number): DartboardSegment | undefined {
    return this.segments.get(segmentId) ?? undefined;
  }

  private registerValue(segment: DartboardSegment): void {
    if (this.segments.has(segment.id)) {
      throw new Error(`Segment with ID ${segment.id} is already registered.`);
    }
    this.segments.set(segment.id, segment);
  }
}
