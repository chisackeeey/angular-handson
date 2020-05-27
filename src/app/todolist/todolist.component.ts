import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService } from './service/todolist.service';
import { Todo } from './domain/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList$: Observable<Todo[]>;

  addTodo(newTodo: string) {
    this.service.addTodo(newTodo);
  }

  toggleComplete(id: number) {
    this.service.toggleComplete(id);
  }

  constructor(private service: TodolistService) {}

  ngOnInit(): void {
    this.todoList$ = this.service.getTodolist();
  }
}
