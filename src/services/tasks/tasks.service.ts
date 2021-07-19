import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseTaskResponse, TasksInfoDTO } from 'src/apiv1/tasks/tasks.controller';
import { Task } from 'src/db/taskmanagement/entities/Task';
import { Repository } from 'typeorm';
import { DateTime } from 'luxon'


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ){}
  getTasks() {
    return 'example1'
  }

  async createTask(body: TasksInfoDTO): Promise<BaseTaskResponse> {
    const nowDate = DateTime.utc().toJSDate()
    console.log('here')
    try{
      const createdTask = this.taskRepository.create({
        title: body.title,
        description: body.description,
        status: body.status,
        createTime: nowDate
      })

      const savedTask = await this.taskRepository.save(createdTask)

      const BaseTaskResponse: BaseTaskResponse = {
        task: savedTask
      }

      return BaseTaskResponse

    } catch (error) {
      console.log(error)
      return null
    }
  }
}
