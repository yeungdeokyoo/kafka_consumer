import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './app.payload';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser(payload: CreateUserDto): CreateUserDto {
    var user : CreateUserDto = payload;
    return user;
  }

}
