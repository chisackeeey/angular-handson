import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateApiService {
  private baseUrl =
    'https://script.google.com/macros/s/AKfycby3NwZhozMWbkS8evh2t3dvfJgKxCBdchI0Xdr31L_BoUb7uqyE/exec';

  constructor(private http: HttpClient) {}

  translateJaToEn(text: string): Observable<string> {
    return this.http.get<string>(
      `${this.baseUrl}?text=${text}&source=ja&target=en`
    );
  }

  translateEnToJa(text: string): Observable<string> {
    return this.http.get<string>(
      `${this.baseUrl}?text=${text}&source=en&target=ja`
    );
  }
}
