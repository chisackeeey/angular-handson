import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  up() {
    this.service.up();
  }

  down() {
    this.service.down();
  }

  power() {
    this.service.power();
  }

  constructor(private service: CounterService) {
    this.count$ = this.service.getCount();
  }

  ngOnInit(): void {}
}
