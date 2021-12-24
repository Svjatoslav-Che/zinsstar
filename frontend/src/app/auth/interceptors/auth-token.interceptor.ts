import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { lockFill } from 'ngx-bootstrap-icons';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.jwt}`
      }
    });

    return next.handle(request);
  }
}
