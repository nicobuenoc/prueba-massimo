import { Ship } from './ship.model';

export interface StartShipResponse {
  count: number;
  next: string;
  previous: string;
  results: Ship[];
}
