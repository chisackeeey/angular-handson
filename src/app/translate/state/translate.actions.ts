import { createAction, props } from '@ngrx/store';

export const translateJaToEn = createAction(
  '[Translate]Japanese To English',
  props<{ text: string }>()
);

export const translateEnToJa = createAction(
  '[Translate]English To Japanese',
  props<{ text: string }>()
);

export const setResult = createAction(
  '[Translate]Set Result',
  props<{ result: string }>()
);

export const alertError = createAction(
  '[Menu]Set Error',
  props<{ error: {} }>()
);
