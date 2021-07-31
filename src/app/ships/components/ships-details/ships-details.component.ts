import { Component, OnInit, Input } from '@angular/core';
import { Ship } from 'src/app/core/models/ship.model';
import { StartShipResponse } from 'src/app/core/models/starships-response.model';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {
  @Input() dataList: StartShipResponse;
  config: any;
  shipId = '';
  url = '';
  // Modal
  currentShip: Ship;

  constructor() {}

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.results?.length
    };
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openDetails(ship: Ship) {
    $('#exampleModal').modal('show');
    this.currentShip = ship;
  }
}
