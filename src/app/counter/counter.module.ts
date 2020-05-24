import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { counterFeatureName } from './state';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(counterFeatureName, counterReducer),
  ],
})
export class CounterModule {}
