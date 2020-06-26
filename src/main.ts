
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

//import * as helmet from 'helmet';
//import csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  //app.register(csurf({ cookie: true }));
  //app.register(helmet());
  //app.register(helmet.xssFilter());
  //app.register(helmet.frameguard());
  
  app.enableCors();
  app.enableShutdownHooks();
  app.listen(3000);
}

bootstrap();