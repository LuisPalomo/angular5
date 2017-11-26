import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class OpenweathermapService {
  private apiKey = 'f15ba487c1707c0811986dcf10663b45';
  private url = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherCity(id: number): Observable<any> {
    const url = `${this.url}/?id=${id}&appid=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched id=${id}`)),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
