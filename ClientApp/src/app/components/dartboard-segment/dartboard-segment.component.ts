import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { DARTBOARD_COLORS, DartboardSegment } from '../../model/dartboard';
import { RoundsFacade } from '../../store/rounds/rounds.facade';

@Component({
  selector: 'app-dartboard-segment',
  templateUrl: 'dartboard-segment.component.html',
  styleUrls: ['dartboard-segment.component.scss'],
  standalone: true,
})
export class DartboardSegmentComponent implements AfterViewInit {
  @Input({ required: true }) segment!: DartboardSegment;

  @ViewChild('segmentButton') segmentButton!: ElementRef;

  constructor(private readonly roundsFacade: RoundsFacade) {}

  selectValue(value: DartboardSegment) {
    this.roundsFacade.setSelectedValue(this.segment.value);
  }

  ngAfterViewInit() {
    this.segmentButton.nativeElement.style.backgroundColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(DARTBOARD_COLORS[this.segment.baseColor]);
    this.segmentButton.nativeElement.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue(
      this.segment.baseColor == 'dark' || this.segment.baseColor == 'red'
        ? DARTBOARD_COLORS['light']
        : DARTBOARD_COLORS['dark']
    );
  }
}
