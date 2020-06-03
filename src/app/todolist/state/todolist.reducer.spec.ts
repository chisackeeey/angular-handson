import { TodolistState } from './todolist.state';
import * as TodolistActions from './todolist.actions';
import { todolistReducer } from './todolist.reducers';

let initialState: TodolistState;

beforeEach(() => {
  initialState = {
    todolist: [{ id: 0, title: 'init', done: false }],
  };
});

describe('TodolistReducer', () => {
  it('should add todo', () => {
    const state = initialState;
    const action = TodolistActions.addTodo({ title: 'add' });
    const newState = todolistReducer(state, action);
    const expected = [
      ...initialState.todolist,
      { id: initialState.todolist.length, title: 'add', done: false },
    ];

    expect(newState.todolist).toEqual(expected);
  });

  it('should toggle complete', () => {
    const state = initialState;
    const action = TodolistActions.toggleComplete({ id: 0 });
    const newState = todolistReducer(state, action);
    const expected = [{ id: 0, title: 'init', done: true }];

    expect(newState.todolist).toEqual(expected);
  });
});
