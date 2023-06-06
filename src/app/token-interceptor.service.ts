import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWhhbWVkIiwianRpIjoiMWVkNjM5MzQtMDc3MS00NzAzLWFkNTAtNDQ0ZWE3ZjZjMzI4IiwiZXhwIjoxNjU3MDMzNDk4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUyMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.UedT_6IpdsTWzeJ-1GsfdI8wad6C-w-qLu49dncqkwU";
    let token = localStorage.getItem('token');

    let jwttoken = req.clone({
      setHeaders: {
        Authorization: "bearer " + token
      }
    })
    return next.handle(jwttoken);
    //throw new Error('Method not implemented.');
  }
}
