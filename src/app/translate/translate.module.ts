import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { translateReducer } from './state/translate.reducer';
import { translateFeatureName } from './state/translate.state';

@NgModule({
  declarations: [TranslateComponent],
  imports: [
    CommonModule,
    TranslateRoutingModule,
    StoreModule.forFeature(translateFeatureName, translateReducer),
  ],
})
export class TranslateModule {}
