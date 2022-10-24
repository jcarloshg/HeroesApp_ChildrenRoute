import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.verifyAuthentication()
      .pipe(
        tap(isAuthenticate => {
          if (isAuthenticate == false) {
            this.router.navigate(['./auth/loggin'])
          }
        })
      );

    // if (this.authService.auth.id) {
    //   return true;
    // }
    // console.log('====================================');
    // console.log('Block by authGard [canActivate]');
    // console.log('====================================');
    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.verifyAuthentication()
      .pipe(
        tap(isAuthenticate => {
          if (isAuthenticate == false) {
            this.router.navigate(['./auth/loggin'])
          }
        })
      );

    // if (this.authService.auth.id) {
    //   return true;
    // }
    // console.log('====================================');
    // console.log('Block by authGard [canLoad]');
    // console.log('====================================');
    // return false;
  }
}
