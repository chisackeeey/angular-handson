import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  @Input() lastName: string = '';
  @Input() firstName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
