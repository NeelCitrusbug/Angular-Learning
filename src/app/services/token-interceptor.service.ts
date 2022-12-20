import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from "rxjs/operators";

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
    .pipe(
      catchError((error:HttpErrorResponse) => {
        let errorMsg = '';
        if(error.error instanceof ErrorEvent) {
          console.warn('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        }else {
          console.warn('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.warn(errorMsg);
        return throwError(errorMsg);
      })
    );
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
