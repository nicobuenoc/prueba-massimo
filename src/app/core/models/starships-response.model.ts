import { Ship } from './ship.model';

export interface StarShipResponse {
  count: number;
  next: string;
  previous: string;
  results: Ship[];
}
