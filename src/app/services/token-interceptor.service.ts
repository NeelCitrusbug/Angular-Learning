import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedRequest = req.clone({
      setHeaders : {
        Authorization: 'Bearer ' + 'xx.yy.zz'
      }
    });
    return next.handle(tokenizedRequest)
  }

  // to get auth token from local storage
  // create auth service with getToken method which returns token from local storage 
  
  // constructor(private authService: AuthService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   let tokenizedRequest = req.clone({
  //     setHeaders : {
  //       Authorization: 'Bearer ' + authService.getToken();
  //     }
  //   });
  //   return next.handle(tokenizedRequest)
  // }
}
