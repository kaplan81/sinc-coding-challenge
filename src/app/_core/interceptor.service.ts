import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(this.cloneReq(req))
      .pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }

  private cloneReq(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({ url: this.replaceDomain(req.url) });
  }

  private replaceDomain(url: string): string | undefined {
    const oldDomain = 'swapi.co';
    const newDomain = 'swapi.dev';
    return url.includes(oldDomain) ? url.replace(oldDomain, newDomain) : undefined;
  }
}
