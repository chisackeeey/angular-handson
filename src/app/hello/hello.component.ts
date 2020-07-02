import { Component, OnInit } from '@angular/core';
import { HelloService } from './service/hello.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  name$: Observable<string>;

  onSetName(name: string) {
    console.log('name' + name);
    this.service.setName(name);
  }

  constructor(private service: HelloService) {
    this.name$ = this.service.getName();
  }

  ngOnInit(): void {}
}
