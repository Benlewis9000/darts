import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { DartboardFactory } from '../../services/dartboard-factory.service';
import {
  Dartboard,
  DartboardSegment,
  DartboardValue,
} from '../../model/dartboard';
import { DartboardSegmentComponent } from '../dartboard-segment/dartboard-segment.component';

@Component({
  selector: 'app-dartboard',
  templateUrl: 'dartboard.component.html',
  standalone: true,
  imports: [PageLayoutComponent, DartboardSegmentComponent],
})
export class DartboardComponent {
  selectedValue?: DartboardSegment;

  readonly dartboard: Dartboard;

  constructor(readonly dartboardSegmentService: DartboardFactory) {
    this.dartboard = dartboardSegmentService.createDartboard();
  }

  selectValue(newValue: DartboardSegment) {
    if (this.selectedValue) {
      this.selectedValue.selected = false;
    }
    newValue.selected = true;
    this.selectedValue = newValue;
  }
}
