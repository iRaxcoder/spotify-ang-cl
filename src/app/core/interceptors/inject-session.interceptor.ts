import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {
  constructor(private cookies: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    try {
      let newRequest = request;
      const token = this.cookies.get('token');
      newRequest = request.clone({
        setHeaders: {
          authorization: 'Bearer ' + token,
        },
      });
      return next.handle(newRequest);
    } catch (e) {
      console.log('error', e);
      return next.handle(request);
    }
  }
}
