import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShipsService } from 'src/app/core/services/ships/ships.service';

import { ShipsEffects } from './ships.effects';

describe('ShipsEffects', () => {
  let actions$: Observable<any>;
  let effects: ShipsEffects;

  const serviceMock = {
    getShips: () => {
      return new BehaviorSubject([]);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipsEffects, provideMockActions(() => actions$), { provide: ShipsService, useValue: serviceMock }]
    });

    effects = TestBed.inject(ShipsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
