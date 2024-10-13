import { AfterContentInit, Component, Input } from '@angular/core';
import { DartboardSegment } from '../../model/dartboard';
import { RoundsFacade } from '../../store/rounds/rounds.facade';
import { NgClass } from '@angular/common';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dartboard-segment',
  templateUrl: 'dartboard-segment.component.html',
  styleUrls: ['dartboard-segment.component.scss'],
  imports: [NgClass],
  standalone: true,
})
export class DartboardSegmentComponent implements AfterContentInit {
  @Input({ required: true }) segment!: DartboardSegment;

  readonly classes = new Set<string>();

  constructor(private readonly roundsFacade: RoundsFacade) {}

  selectSegment() {
    this.roundsFacade.setSelectedSegment(this.segment);
  }

  toggleSelected() {
    this.segment.selected = !this.segment.selected;
    this.classes.has('selected')
      ? this.classes.delete('selected')
      : this.classes.add('selected');
  }

  ngAfterContentInit(): void {
    this.roundsFacade.selectedSegmentId$
      .pipe(distinctUntilChanged())
      .subscribe((selectedId) => {
        if (selectedId == this.segment.id || this.segment.selected) {
          this.toggleSelected();
        }
      });

    this.classes.add(this.segment.baseColor);
  }
}
