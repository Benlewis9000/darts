import { Component, Input } from '@angular/core';
import { RoundsFacade } from '../../../../store/rounds/rounds.facade';
import { RoundThrow } from '../../../../model/round';

@Component({
  selector: 'app-throw-selector',
  templateUrl: 'throw-selector.component.html',
  styleUrls: ['throw-selector.component.scss'],
  standalone: true,
})
export class ThrowSelector {
  @Input({ required: true })
  targetRound!: RoundThrow;

  constructor(private readonly roundsFacade: RoundsFacade) {}

  goToRoundThrow(roundThrow: RoundThrow) {
    this.roundsFacade.setCurrentThrow(roundThrow);
  }
}
