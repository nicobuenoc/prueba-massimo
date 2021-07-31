import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ship } from 'src/app/core/models/ship.model';
import { StarShipResponse } from 'src/app/core/models/starships-response.model';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {
  dataList: StarShipResponse;
  @Input('dataList') set setDataList(dataList: StarShipResponse) {
    this.dataList = dataList;

    this.config.totalItems = this.dataList?.count;
  }
  config: any = {};
  shipId = '';
  url = '';
  // Modal
  currentShip: Ship;

  @Output() changePage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.config.itemsPerPage = 10;
    this.config.currentPage = 1;
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const urlImage = `${this.shipId}.jpg`;
    return urlImage !== '';
  }

  pageChanged(event: number) {
    this.config.currentPage = event;

    this.changePage.emit(event);
  }

  openDetails(ship: Ship) {
    $('#exampleModal').modal('show');
    this.currentShip = ship;
  }
}
