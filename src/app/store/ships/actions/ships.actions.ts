import { createAction, props } from '@ngrx/store';
import { StarShipResponse } from 'src/app/core/models/starships-response.model';

export const loadStarShipResponse = createAction('[Ships] Load Startships response');

export const setStarShipResponse = createAction('[Ships] Set Startships response', props<{ starShipResponse: StarShipResponse }>());
