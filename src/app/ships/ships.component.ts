import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/ships/services/ships.service';
import { StartShipResponse } from '../core/models/starships-response.model';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public dataList: any = [];

  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((shipsResponse: StartShipResponse) => {
      this.dataList = shipsResponse;
      console.log('SHIPS -->', this.dataList.results);
    });
  }
}
