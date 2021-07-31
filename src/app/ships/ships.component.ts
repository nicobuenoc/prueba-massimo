import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StarShipResponse } from '../core/models/starships-response.model';
import { loadStarShipResponse } from '../store/ships/actions/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public starShipResponse$: Observable<StarShipResponse>;

  constructor(private store: Store<{ starShipResponse: StarShipResponse }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadStarShipResponse({}));

    this.starShipResponse$ = this.store.select('starShipResponse').pipe(
      tap((shipsResponse: StarShipResponse) => {
        console.log('SHIPS -->', shipsResponse?.results);
      })
    );
  }
}
