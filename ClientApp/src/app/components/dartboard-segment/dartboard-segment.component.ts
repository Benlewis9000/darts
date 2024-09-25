import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DartboardSlice, DartboardSegment } from '../../model/dartboard';

@Component({
  selector: 'app-dartboard-segment',
  templateUrl: 'dartboard-segment.component.html',
  styleUrls: ['dartboard-segment.component.scss'],
  standalone: true,
})
export class DartboardSegmentComponent {
  @Input({ required: true }) segment!: DartboardSlice;

  @Output() onValueSelected = new EventEmitter<DartboardSegment>();

  selectValue(value: DartboardSegment) {
    this.onValueSelected.emit(value);
  }
}
