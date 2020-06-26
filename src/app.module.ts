import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'config';

const dbConfig = config.get('postgres');

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-247-78-30.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'kvdnxsyhjmsltd',
      password: '18d841508e8bfab5593d07d81feef8fb0367825511d79bf79d9f1dfefcaf4154',
      database: 'das3a18aek5aji',
      entities: [],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
