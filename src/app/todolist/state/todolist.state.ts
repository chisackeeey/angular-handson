import { createSelector, createFeatureSelector } from '@ngrx/store';

export const todolistFeatureName = 'todolist';

export interface TodolistState {
  todolist: [];
}

export const initialState: TodolistState = {
  todolist: [],
};

export const selectTodolistFeature = createFeatureSelector<TodolistState>(
  todolistFeatureName
);

export const selectTodolist = createSelector(
  selectTodolistFeature,
  (state) => state.todolist
);
