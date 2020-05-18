import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'todolist', component: TodolistComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
