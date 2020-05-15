import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_TODO } from './../mock-todolist';
import { Todo } from './../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  newTodo = '';
  todoList = DEFAULT_TODO;

  toggleComplete(todo: Todo) {
    todo.done = !todo.done;
  }

  addTodo() {
    this.todoList = [
      ...this.todoList,
      { id: this.todoList.length + 1, title: this.newTodo, done: false },
    ];
    this.initialize();
  }

  initialize() {
    this.newTodo = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
