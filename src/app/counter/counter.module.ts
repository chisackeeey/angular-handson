import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(
      fromCounter.counterFeatureKey,
      fromCounter.reducers,
      { metaReducers: fromCounter.metaReducers }
    ),
  ],
})
export class CounterModule {}
