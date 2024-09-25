import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DartboardSlice, DartboardSegment } from '../../model/dartboard';

@Component({
  selector: 'app-dartboard-slice',
  templateUrl: 'dartboard-slice.component.html',
  styleUrls: ['dartboard-slice.component.scss'],
  standalone: true,
})
export class DartboardSliceComponent {
  @Input({ required: true }) slice!: DartboardSlice;

  @Output() onValueSelected = new EventEmitter<DartboardSegment>();

  selectValue(value: DartboardSegment) {
    this.onValueSelected.emit(value);
  }
}
