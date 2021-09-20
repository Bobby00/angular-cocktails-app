import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Using API to get list of cocktails by first letter but i'm randomizing the letter
  // so that every refresh displays different random cocktails

  private REST_API_SERVER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + Math.random().toString(26).replace(/[^a-z]+/g, '').substr(0, 1);

  constructor(private http: HttpClient) { }

  // ERROR HANDLING, redudant for big apps, so i'm only using it cause the app is fairly small currently 

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // Catching error and using retry*3 to resend the http request, in cases where their might be poor connection.
  public getCocktails() {
    return this.http.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError))
  }
}
