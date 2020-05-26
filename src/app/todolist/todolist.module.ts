import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import * as fromTodolist from './state/todolist.state';
import { todolistReducer } from './state/todolist.reducers';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    StoreModule.forFeature(fromTodolist.todolistFeatureName, todolistReducer),
  ],
})
export class TodolistModule {}
