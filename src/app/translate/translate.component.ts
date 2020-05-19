import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  onClick(word: string) {
    this.translateService.translate(word).subscribe((result) => alert(result));
  }

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
