import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Routes, RouterModule } from 'nest-router';
import { typeOrmConfig } from 'typeorm.config';
import { Apiv1Module } from './apiv1/apiv1.module';
import { Apiv2Module } from './apiv2/apiv2.module';
import { ServicesModule } from './services/services.module';
import { AuthModule } from './auth/auth.module';
const routes: Routes = [
  {
    path: '/v1',
    module: Apiv1Module
  },
  {
    path: '/v2',
    module: Apiv2Module
  }
]

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RouterModule.forRoutes(routes), 
    Apiv1Module, 
    Apiv2Module, 
    ServicesModule, AuthModule
  ],
})
export class AppModule {}
