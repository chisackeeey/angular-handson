import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  result = '';
  loading = false;

  onClickTranslate(text: string) {
    this.loading = true;
    this.translateService.translateJaToEn(text).subscribe(
      (result) => (this.result = result),
      (error) => alert(error.statusText),
      () => (this.loading = false)
    );
  }

  onClickRetranslate(text: string) {
    this.loading = true;
    this.translateService.translateEnToJa(text).subscribe(
      (result) => (this.result = result),
      (error) => alert(error.statusText),
      () => (this.loading = false)
    );
  }

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
