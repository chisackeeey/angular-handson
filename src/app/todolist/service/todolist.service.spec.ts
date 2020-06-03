import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { TodolistService } from './todolist.service';
import { todolistFeatureName } from '../state/todolist.state';
import { todolistReducer } from '../state/todolist.reducers';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TodolistService }],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(todolistFeatureName, todolistReducer),
      ],
    });
    service = TestBed.inject(TodolistService);
  });

  it('addTodo() should add todo', () => {
    const expected = [
      {
        id: 0,
        title: 'add',
        done: false,
      },
    ];
    service.addTodo('add');
    service.getTodolist().subscribe((todolist) => {
      expect(todolist).toEqual(expected);
    });
  });

  it('toggleComplete() should toggle complete', () => {
    const expected = [
      {
        id: 0,
        title: 'add',
        done: true,
      },
    ];
    service.addTodo('add');
    service.toggleComplete(0);
    service.getTodolist().subscribe((todolist) => {
      expect(todolist).toEqual(expected);
    });
  });
});
