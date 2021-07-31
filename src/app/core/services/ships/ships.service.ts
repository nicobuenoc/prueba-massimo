import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarShipResponse } from 'src/app/core/models/starships-response.model';

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

  getShips(page: number): Observable<StarShipResponse> {
    let params = new HttpParams();

    if (page > 0) {
      params = params.set('page', page.toString());
    }

    return this.http.get<StarShipResponse>(this.url, { params });
  }
}
