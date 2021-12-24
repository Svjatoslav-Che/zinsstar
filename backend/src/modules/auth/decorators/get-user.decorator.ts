import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserPayload } from '../../user/models/user.class';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserPayload => {
    return ctx.switchToHttp().getRequest().user;
  },
);
