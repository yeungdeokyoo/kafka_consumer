/*import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
          groupId: 'my-kafka-consumer',
      }
    }
  });

  //app.listen(() => { console.log('Kafka consumer service is listening!') })
  app.listen()
}
bootstrap();*/



import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const microservicesOptions: any = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8875,
    },
  };

  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    microservicesOptions,
  );

  //app.listen(() => console.log('Microservice is listening'));
  app.listen();
}
bootstrap();