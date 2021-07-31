import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ShipsEffects } from './ships.effects';

describe('ShipsEffects', () => {
  let actions$: Observable<any>;
  let effects: ShipsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShipsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ShipsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
