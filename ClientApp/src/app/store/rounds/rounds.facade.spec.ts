import { TestBed } from '@angular/core/testing';
import { expect } from '@esm-bundle/chai';
import { StoreModule } from '@ngrx/store';
import { roundsReducer } from './rounds.reducer';
import { RoundsFacade } from './rounds.facade';
import { take, zip } from 'rxjs';

let facade: RoundsFacade;

const configureServices = () => {
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        rounds: roundsReducer,
      }),
    ],
    providers: [RoundsFacade],
  }).compileComponents();

  facade = TestBed.inject(RoundsFacade);
};

describe('RoundsFacade', () => {
  beforeEach(() => {
    configureServices();
  });

  it('should have initial state', (done) => {
    zip(
      facade.currentRound$,
      facade.currentThrow$,
      facade.currentValue$
    ).subscribe(([currentRound, currentThrow, currentValue]) => {
      expect(currentRound).to.equal(1);
      expect(currentThrow).to.equal(1);
      expect(currentValue).to.be.undefined;
      done();
    });
  });

  describe('current round', () => {
    it('should output the new current round when set', (done) => {
      facade.setCurrentRound(42);
      facade.currentRound$.subscribe((currentRound) => {
        expect(currentRound).to.equal(42);
        done();
      });
    });
  });

  describe('current throw', () => {
    it('should output the new current throw when set', (done) => {
      facade.setCurrentThrow(3);
      facade.currentThrow$.subscribe((currentThrow) => {
        expect(currentThrow).to.equal(3);
        done();
      });
    });
  });

  describe('current value', () => {
    it('should output the new current value when set', (done) => {
      const value = { baseValue: 20, multiplier: 3 };
      facade.setSelectedValue(value);
      facade.currentValue$.subscribe((currentValue) => {
        expect(currentValue).to.equal(value);
        done();
      });
    });

    it('should output the correct value for the correct selection', (done) => {
      const value = { baseValue: 20, multiplier: 3 };
      facade.setCurrentRound(42);
      facade.setCurrentThrow(3);
      facade.setSelectedValue(value);

      facade.currentValue$.pipe(take(1)).subscribe((currentValue) => {
        expect(currentValue).to.equal(value);
        done();
      });
    });

    it('should output the undefined for no selection', (done) => {
      const value = { baseValue: 20, multiplier: 3 };
      facade.setCurrentRound(42);
      facade.setCurrentThrow(3);
      facade.setSelectedValue(value);
      facade.setCurrentThrow(1);

      facade.currentValue$.pipe(take(1)).subscribe((currentValue) => {
        expect(currentValue).to.be.undefined;
        done();
      });
    });
  });
});
