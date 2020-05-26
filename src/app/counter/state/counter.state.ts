import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterFeatureName = 'counter';

export const selectCounterFeature = createFeatureSelector<CounterState>(
  counterFeatureName
);
export const selectCount = createSelector(
  selectCounterFeature,
  (state) => state.count
);
