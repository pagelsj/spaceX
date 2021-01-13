import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {

  constructor( private http: HttpClient ) { }

  public load(): Observable<any> {

    return this.http
      .get(`${environment.BASE_API}/v3/launches?limit=10&order=desc`)
      .pipe(
        tap((response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
