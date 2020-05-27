import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService } from './service/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList$: Observable<[]>;

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
