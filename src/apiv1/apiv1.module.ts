import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Task } from 'src/db/taskmanagement/entities/Task';
import { User } from 'src/db/taskmanagement/entities/User';
import { ServicesModule } from 'src/services/services.module';
import { TasksService } from 'src/services/tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [ServicesModule, TypeOrmModule.forFeature([Task, User]), AuthModule],
  controllers: [TasksController, UserController],
})
export class Apiv1Module {}
