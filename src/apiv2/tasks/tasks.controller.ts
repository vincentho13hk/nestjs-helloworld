import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

  @Get()
  getVoice() {
    return 'Meow'
  }
}
