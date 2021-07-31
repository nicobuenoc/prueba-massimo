import * as ShipsActions from './../actions/ships.actions';
import { createReducer, on } from '@ngrx/store';
import { StarShipResponse } from 'src/app/core/models/starships-response.model';

export const initialStarShipsResponseDestination: StarShipResponse = null;

const _shipsReducer = createReducer(
  initialStarShipsResponseDestination,
  on(ShipsActions.setStarShipResponse, (state, { starShipResponse }) => {
    return starShipResponse;
  })
);

export function ShipsReducer(state, action): StarShipResponse {
  return _shipsReducer(state, action);
}
