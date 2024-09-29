import { TestBed } from '@angular/core/testing';
import { expect } from '@esm-bundle/chai';
import { StoreModule } from '@ngrx/store';
import { roundsReducer } from './rounds.reducer';
import { RoundsFacade } from './rounds.facade';

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

  it('should be truthy', () => {
    expect(facade).to.not.be.undefined;
  });

  it('should have default state', (done: DoneFn) => {
    done();
  });
});
