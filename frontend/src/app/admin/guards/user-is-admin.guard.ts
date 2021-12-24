import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserRole } from 'src/app/auth/models/jwt.class';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserIsAdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.hasAccess().pipe(
      tap((canPass: boolean) => {
        if (!canPass) {
          this.router.navigate(['/']);
        } else {
          if (this.auth.decodedJwt.user.role === UserRole.ADMIN) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      })
    );
  }
}
