import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.hasAccess().pipe(
      tap((canPass: boolean) => {
        if (!canPass) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
}
