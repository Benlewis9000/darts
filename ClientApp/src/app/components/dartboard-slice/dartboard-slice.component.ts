import { Component, Input } from '@angular/core';
import { DartboardSlice } from '../../model/dartboard';
import { DartboardSegmentComponent } from '../dartboard-segment/dartboard-segment.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dartboard-slice',
  templateUrl: 'dartboard-slice.component.html',
  styleUrls: ['dartboard-slice.component.scss'],
  standalone: true,
  imports: [DartboardSegmentComponent, NgClass],
})
export class DartboardSliceComponent {
  @Input({ required: true }) slice!: DartboardSlice;
}
