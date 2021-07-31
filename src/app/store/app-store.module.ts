import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShipsReducer } from './ships/reducers/ships.reducer';
import { ShipsEffects } from './ships/effects/ships.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { UsersService } from '../core/services/users/users.service';
import { HttpClientModule } from '@angular/common/http';

const reducers: ActionReducerMap<any> = {
  starShipResponse: ShipsReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ShipsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule
  ],
  declarations: [],
  providers: [UsersService]
})
export class AppStoreModule {}
