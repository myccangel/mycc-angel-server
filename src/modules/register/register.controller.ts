/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { UserRegister } from '../model/user-register';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post() // to add new user
  register(@Body() userRegister: UserRegister){
    return userRegister;
  }

  @Get() // to get all users
  async getAllUsers() {
    return"alll";
  }

}
