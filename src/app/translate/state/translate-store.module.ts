import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { translateFeatureName } from './translate.state';
import { translateReducer } from './translate.reducer';
import { TranslateEffects } from './translate.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(translateFeatureName, translateReducer),
    EffectsModule.forFeature([TranslateEffects]),
  ],
})
export class TranslateStoreModule {}
