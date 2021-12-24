import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserSecurityService } from '../services/security/user-security.service';
import { User } from '../../user/models/user.class';

@Injectable()
export class UserIsUserGuard implements CanActivate {
  public constructor(private userSecurityService: UserSecurityService) {}

  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;
    const { user } = request;
    return this.userSecurityService.findOne(user.id).pipe(
      map((user: User) => {
        let hasPermission = false;
        if (user.id === String(params.id)) {
          hasPermission = true;
        }
        return user && hasPermission;
      }),
    );
  }
}
