import { Module }         from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { TypeOrmModule }  from '@nestjs/typeorm';
import config  from 'config';

const _dbconfig:any = config.get('database');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name:       'default',
      url:        _dbconfig.url,
      type:       _dbconfig.type,
      host:       _dbconfig.host,
      port:       _dbconfig.port,
      username:   _dbconfig.username,
      password:   _dbconfig.password,
      database:   _dbconfig.database,
      entities: [],
      synchronize: true,
      extra: {
        ssl: true
      }
      
    }),
  ],

  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
