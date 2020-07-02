import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  name: string;
}

export const initialState: State = {
  name: '',
};

export const helloFeatureName = 'hello';

export const selectHelloFeature = createFeatureSelector<State>(
  helloFeatureName
);

export const selectName = createSelector(
  selectHelloFeature,
  (state) => state.name
);
