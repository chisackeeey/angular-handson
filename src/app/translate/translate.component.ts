import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TranslateService } from './service/translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  result$: Observable<string>;
  loading$: Observable<boolean>;

  onClickTranslate(text: string) {
    console.log('component' + text);
    this.service.translateJaToEn(text);
  }

  onClickRetranslate() {
    this.result$.pipe(first()).subscribe((result: string) => {
      this.service.translateEnToJa(result);
    });
  }

  constructor(private service: TranslateService) {
    this.result$ = this.service.getResult();
    this.loading$ = this.service.getLoading();
  }

  ngOnInit(): void {}
}
