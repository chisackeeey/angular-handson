import { Component, OnInit } from '@angular/core';
import { DEFAULT_TODO } from './../mock-todolist';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList = DEFAULT_TODO;

  constructor() {}

  ngOnInit(): void {}
}
