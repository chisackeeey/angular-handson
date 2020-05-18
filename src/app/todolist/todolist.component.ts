import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_TODO } from './../mock-todolist';
import { Todo } from './../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList = DEFAULT_TODO;

  toggleComplete(todo: Todo) {
    todo.done = !todo.done;
  }

  addTodo(newTodo: string) {
    this.todoList = [
      ...this.todoList,
      { id: this.todoList.length + 1, title: newTodo, done: false },
    ];
  }

  constructor() {}

  ngOnInit(): void {}
}
