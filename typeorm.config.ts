import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Task } from 'src/db/taskmanagement/entities/Task'
import { User } from 'src/db/taskmanagement/entities/User'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ngis1234',
  database: 'taskmanagement',
  entities: [Task, User],
  synchronize: false
}