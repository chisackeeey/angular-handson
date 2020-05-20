import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hello',
    loadChildren: () =>
      import('./hello/hello.module').then((m) => m.HelloModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'todolist',
    loadChildren: () =>
      import('./todolist/todolist.module').then((m) => m.TodolistModule),
  },
  {
    path: 'translate',
    loadChildren: () =>
      import('./translate/translate.module').then((m) => m.TranslateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
