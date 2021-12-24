import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { map } from 'rxjs/operators';
import { UserSecurityService } from '../services/security/user-security.service';
import { User } from '../../user/models/user.class';

@Injectable()
export class RolesGuard implements CanActivate {
  public constructor(
    private reflector: Reflector,
    private userSecurityService: UserSecurityService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('role', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    return this.userSecurityService.findOne(user.id).pipe(
      map((user: User) => {
        const hasRole = () => roles.indexOf(user.role.toString()) > -1;
        let hasPermission: boolean = false;

        if (hasRole()) {
          hasPermission = true;
        }

        return user && hasPermission;
      }),
    );
  }
}
