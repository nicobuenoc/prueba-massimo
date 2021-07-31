import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarShipResponse } from '../core/models/starships-response.model';
import { loadStarShipResponse } from '../store/ships/actions/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public dataList: any = [];

  constructor(private store: Store<{starShipResponse: StarShipResponse}>) {}

  ngOnInit(): void {
    this.store.dispatch(loadStarShipResponse());

    this.store.select('starShipResponse').subscribe((shipsResponse: StarShipResponse) => {
      this.dataList = shipsResponse;
      console.log('SHIPS -->', this.dataList?.results);
    });
  }
}
