import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: object): Observable<T> {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any, options?: object): Observable<T> {
    return this.http.post<T>(url, body, options);
  }
}
