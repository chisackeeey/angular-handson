import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  result = '';

  onClick(text: string) {
    this.translateService
      .translate(text)
      .subscribe((result) => (this.result = result));
  }

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
