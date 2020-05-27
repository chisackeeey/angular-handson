import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from '../domain/todo';

export const todolistFeatureName = 'todolist';

export interface TodolistState {
  todolist: Todo[];
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
