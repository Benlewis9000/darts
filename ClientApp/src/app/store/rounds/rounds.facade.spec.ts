import { TestBed } from '@angular/core/testing';
import { expect } from '@esm-bundle/chai';
import { StoreModule } from '@ngrx/store';
import { roundsReducer } from './rounds.reducer';
import { RoundsFacade } from './rounds.facade';
import { take, zip } from 'rxjs';
import { DartboardSegment } from '../../model/dartboard';
import { DartboardSegmentManager } from '../../services/dartboard-segment-manager.service';

const basicValue = { baseValue: 20, multiplier: 3 };

const basicSegment: DartboardSegment = {
  id: 0,
  value: basicValue,
  displayName: '',
  baseColor: 'light',
  selected: false,
};

let facade: RoundsFacade;

const configureServices = () => {
  const segmentManagerMock = jasmine.createSpyObj<DartboardSegmentManager>([
    'getSegment',
  ]);
  segmentManagerMock.getSegment.and.returnValue(basicSegment);
  TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        rounds: roundsReducer,
      }),
    ],
    providers: [
      RoundsFacade,
      { provide: DartboardSegmentManager, useValue: segmentManagerMock },
    ],
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
      facade.setSelectedSegment(basicSegment);
      facade.currentValue$.subscribe((currentValue) => {
        expect(currentValue).to.equal(basicValue);
        done();
      });
    });

    it('should output the correct value for the correct selection', (done) => {
      facade.setCurrentRound(42);
      facade.setCurrentThrow(3);
      facade.setSelectedSegment(basicSegment);

      facade.currentValue$.pipe(take(1)).subscribe((currentValue) => {
        expect(currentValue).to.equal(basicValue);
        done();
      });
    });

    it('should output the undefined for no selection', (done) => {
      const value = { baseValue: 20, multiplier: 3 };
      facade.setCurrentRound(42);
      facade.setCurrentThrow(3);
      facade.setSelectedSegment(basicSegment);
      facade.setCurrentThrow(1);

      facade.currentValue$.pipe(take(1)).subscribe((currentValue) => {
        expect(currentValue).to.be.undefined;
        done();
      });
    });
  });
});
