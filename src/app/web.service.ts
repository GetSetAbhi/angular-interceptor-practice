import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebResponse } from './web-response';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(private http: HttpClient) {}

  getResponseFromWeb() {
    let url = 'https://mocki.io/v1/429c5590-43f1-4fb4-9496-0beddebe996c';
    return this.http.get<WebResponse>(url);
  }
}
