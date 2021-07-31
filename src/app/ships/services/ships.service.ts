import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StartShipResponse } from 'src/app/core/models/starships-response.model';

@Injectable()
export class ShipsService {
  url = 'https://swapi.dev/api/starships/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http: HttpClient) {}

  getShips(): Observable<StartShipResponse> {
    return this.http.get<StartShipResponse>(this.url);
  }
}
