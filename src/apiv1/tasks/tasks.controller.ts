import { Body, Controller, Get, Post, Header, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Task } from 'src/db/taskmanagement/entities/Task';
import { TasksService } from 'src/services/tasks/tasks.service';

export class TasksData {
  @ApiProperty({ description: 'User task list' })
  tasks: string[]
}

export class TasksInfoDTO {
  @ApiProperty({ description: 'Task name' })
  title: string

  @ApiPropertyOptional({ description: 'Task Description' })
  description?: string

  @ApiPropertyOptional({ description: 'IsCompleted' })
  status: boolean
}

export class BaseTaskResponse {
  @ApiProperty({ description: "User Task Info" })
  task: Task
}

@Controller('tasks')
export class TasksController {

  constructor(
    private readonly tasksService: TasksService
  ) { }

  @Get()
  @ApiOperation({
    summary: 'Get All Tasks',
    description: `
    Get All Tasks From the user
    `
  })
  @ApiCreatedResponse({
    description: 'The info has been successfully fetched',
    type: TasksData
  })
  getAllTask() {
    return this.tasksService.getTasks;
  }

  // createTask
  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Create Task Info',
    description: `Create User Task Info`
  })
  @ApiCreatedResponse({
    description: 'The info has been successfully created.',
    type: BaseTaskResponse
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Header('content-type', 'application/json')
  async createTask(
    @Body() body: TasksInfoDTO
  ): Promise<BaseTaskResponse> {
    return await this.tasksService.createTask(body)
  }


  // @Post()
  // @ApiOperation({
  //   summary: 'Update tasks',
  //   description: `
  //   Update user tasks
  //   `
  // })
  // @ApiCreatedResponse({
  //   description: 'The info has been successfully updated.',
  //   type: TasksData
  // })
  // @ApiForbiddenResponse({description: 'Forbidden.'})
  // updateTask(@Body() body: TasksInfoDTO) {
  //   return 'example'
  // }
}
