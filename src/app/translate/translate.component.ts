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

  async onClick(text: string) {
    this.loading = true;
    await this.translateService.translate(text).subscribe(
      (result) => (this.result = result),
      (error) => alert(error.statusText)
    );
    this.loading = false;
  }

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
