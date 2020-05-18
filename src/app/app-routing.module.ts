import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: '/hello', component: HelloComponent },
  { path: '/counter', component: CounterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
