import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOperation, ApiProperty } from '@nestjs/swagger';

export class TasksData {
  @ApiProperty({ description: 'User task list'})
  tasks: string []
}

export class TasksInfoDTO {
  @ApiProperty({description: 'Task name'})
  name: string
  @ApiProperty({required: false ,description: 'IsCompleted'})
  isCompleted?: boolean
}

@Controller('tasks')
export class TasksController {

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
    return 'example'
  }

  @Post()
  @ApiOperation({
    summary: 'Update tasks',
    description: `
    Update user tasks
    `
  })
  @ApiCreatedResponse({
    description: 'The info has been successfully updated.',
    type: TasksData
  })
  @ApiForbiddenResponse({description: 'Forbidden.'})
  updateTask(@Body() body: TasksInfoDTO) {
    return 'example'
  }
}
