import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface TranslateState {
  result: string;
  loading: boolean;
}

export const initialState: TranslateState = {
  result: '',
  loading: false,
};

export const translateFeatureName = 'translate';

export const selectTranslateFeature = createFeatureSelector<TranslateState>(
  translateFeatureName
);

export const selectResult = createSelector(
  selectTranslateFeature,
  (state) => state.result
);

export const selectLoading = createSelector(
  selectTranslateFeature,
  (state) => state.loading
);
