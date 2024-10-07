import { Component } from '@angular/core';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { DartboardFactory } from '../../services/dartboard-factory.service';
import { Dartboard } from '../../model/dartboard';
import { DartboardSliceComponent } from '../dartboard-slice/dartboard-slice.component';
import { RoundsFacade } from '../../store/rounds/rounds.facade';
import { AsyncPipe } from '@angular/common';
import { distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'app-dartboard',
  templateUrl: 'dartboard.component.html',
  styleUrls: ['dartboard.component.scss'],
  standalone: true,
  imports: [PageLayoutComponent, DartboardSliceComponent, AsyncPipe],
})
export class DartboardComponent {
  readonly dartboard: Dartboard;
  readonly selectedValue$: Observable<number>;

  constructor(
    readonly dartboardFactory: DartboardFactory,
    readonly roundsFacade: RoundsFacade
  ) {
    this.dartboard = dartboardFactory.createDartboard();
    this.selectedValue$ = roundsFacade.currentValue$.pipe(
      distinctUntilChanged(),
      map((value) => (value ? value.baseValue * value.multiplier : 0))
    );
  }
}
