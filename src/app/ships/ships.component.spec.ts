import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShipsService } from '../core/services/ships/ships.service';

import { ShipsComponent } from './ships.component';

import { BehaviorSubject, of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;
  const serviceMock = {
    getShips: () => {
      return new BehaviorSubject([]);
    }
  };

  const storeMock = {
    select: () => {
      return of({});
    },

    dispatch(action: any) {}
  };

  @Component({
    selector: 'ships-details',
    template: '<p>Mock Ship Details</p>'
  })
  class MockShipDetails {
    @Input() dataList: any;
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShipsComponent, MockShipDetails],
        providers: [
          { provide: ShipsService, useValue: serviceMock },
          { provide: Store, useValue: storeMock }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
