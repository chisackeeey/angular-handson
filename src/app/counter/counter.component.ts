import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  down() {
    alert('down');
  }

  up() {
    alert('up');
  }

  constructor() {}

  ngOnInit(): void {}
}
