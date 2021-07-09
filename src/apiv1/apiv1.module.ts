import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';

@Module({
  controllers: [TasksController]
})
export class Apiv1Module {}
