import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppService } from './app.service';
import { CreateUserDto } from './app.payload';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('my-first-topic') // Our topic name
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello World!';
  }

  @MessagePattern('create_user')
  async createUser(@Payload() payload: CreateUserDto) {
    const user = await this.appService.createUser(payload);
    return user;
  }
}
