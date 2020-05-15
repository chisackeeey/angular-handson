import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter = 0;

  down() {
    this.counter = this.counter - 1;
  }

  up() {
    this.counter = this.counter + 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
