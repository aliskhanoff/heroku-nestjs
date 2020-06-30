import { Module }         from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { TypeOrmModule }  from '@nestjs/typeorm';
import UserEntity, { RoleEntity } from './entities'

const _dbconfig = require('config');

console.log(_dbconfig);

 @Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   dropSchema: true,
    //   retryDelay: 1000,
    //   url:        _dbconfig.url,
    //   type:       "postgres",
    //   host:       _dbconfig.host,
    //   port:       _dbconfig.port,
    //   username:   _dbconfig.username,
    //   password:   _dbconfig.password,
    //   database:   _dbconfig.database,
    //   entities: [UserEntity, RoleEntity],
    //   synchronize: true,
    //   ssl: _dbconfig.ssl || false,
    //   extra: {
    //     ssl: {
    //       rejectUnauthorized: false,
    //     },
    //   }
    // }),
  ],

  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
