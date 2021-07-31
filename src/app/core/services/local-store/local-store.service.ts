import { Injectable } from '@angular/core';
import { LocalStoreNames } from '../../enums/local-store-name.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  constructor() {}

  save(name: LocalStoreNames, values: any) {
    localStorage.setItem(name, JSON.stringify(values));
  }

  get<T>(name: LocalStoreNames): T {
    return JSON.parse(localStorage.getItem(name));
  }
}
