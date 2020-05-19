import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private url =
    'https://script.google.com/macros/s/AKfycby3NwZhozMWbkS8evh2t3dvfJgKxCBdchI0Xdr31L_BoUb7uqyE/exec';

  constructor(private http: HttpClient) {}

  translate(text: string) {
    return this.http.get(`${this.url}?text=${text}&source=ja&target=en`, {
      responseType: 'text',
    });
  }
}
