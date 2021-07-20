import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/db/taskmanagement/entities/User';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);