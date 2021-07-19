import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from 'src/apiv1/tasks/tasks.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Task } from 'src/db/taskmanagement/entities/Task';
import { User } from 'src/db/taskmanagement/entities/User';
import { TasksService } from './tasks/tasks.service';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User]), AuthModule],
  providers: [TasksService, UserService],
  // controllers: [TasksController],
  exports: [TasksService, UserService],
})
export class ServicesModule {}
