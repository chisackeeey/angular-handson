import {} from '@ngrx/store';

export interface TranslateState {
  result: string;
}

export const initialState: TranslateState = {
  result: '',
};

export const translateFeatureName = 'translate';
