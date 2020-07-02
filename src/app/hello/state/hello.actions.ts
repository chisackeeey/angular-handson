import { createAction, props } from '@ngrx/store';

export const setName = createAction(
  '[Hello]Set Name',
  props<{ name: string }>()
);
