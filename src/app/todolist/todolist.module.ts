import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodolist from './state/todolist.state';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    StoreModule.forFeature(
      fromTodolist.todolistFeatureKey,
      fromTodolist.reducers,
      { metaReducers: fromTodolist.metaReducers }
    ),
  ],
})
export class TodolistModule {}
