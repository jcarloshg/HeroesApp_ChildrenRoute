import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.URL_JSON_USERS;
  private _auth: Auth | undefined;

  public get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  verifyAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
      // return false;
    }

    return this.httpClient.get<Auth>(`${this.baseUrl}/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true
        })
      );
    // // return of(true);
    // return true;
  }

  loging() {
    return this.httpClient.get<Auth>(`${this.baseUrl}/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id))
      )
      ;
  }

  logOut() {
    this._auth = undefined;
  }
}
