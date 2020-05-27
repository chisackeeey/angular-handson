import { createAction, props } from '@ngrx/store';

export const translateJaToEn = createAction(
  '[Translate]Japanese To English',
  props<{ text: string }>()
);

export const translateEnToJa = createAction(
  '[Translate]English To Japanese',
  props<{ text: string }>()
);
