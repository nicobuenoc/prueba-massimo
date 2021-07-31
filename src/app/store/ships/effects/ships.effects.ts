import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShipsService } from '../../../core/services/ships/ships.service';
import { map, exhaustMap } from 'rxjs/operators';
import { StarShipResponse } from '../../../core/models/starships-response.model';
import * as ShipsActions from './../actions/ships.actions';

@Injectable()
export class ShipsEffects {
  setAccountSettlement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShipsActions.loadStarShipResponse),
      exhaustMap(() =>
        this.shipsService
          .getShips()
          .pipe(map((starShipResponse: StarShipResponse) => ShipsActions.setStarShipResponse({ starShipResponse })))
      )
    )
  );

  constructor(private actions$: Actions, private shipsService: ShipsService) {}
}
