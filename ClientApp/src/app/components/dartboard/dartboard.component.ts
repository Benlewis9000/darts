import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { DartboardFactory } from '../../services/dartboard-factory.service';
import { Dartboard, DartboardSegment } from '../../model/dartboard';
import { DartboardSliceComponent } from '../dartboard-slice/dartboard-slice.component';

@Component({
  selector: 'app-dartboard',
  templateUrl: 'dartboard.component.html',
  standalone: true,
  imports: [PageLayoutComponent, DartboardSliceComponent],
})
export class DartboardComponent {
  selectedValue?: DartboardSegment;

  readonly dartboard: Dartboard;

  constructor(readonly dartboardFactory: DartboardFactory) {
    this.dartboard = dartboardFactory.createDartboard();
  }

  selectValue(newValue: DartboardSegment) {
    if (this.selectedValue) {
      this.selectedValue.selected = false;
    }
    newValue.selected = true;
    this.selectedValue = newValue;
  }
}
