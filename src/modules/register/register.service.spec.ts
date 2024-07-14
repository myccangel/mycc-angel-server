/* eslint-disable prettier/prettier */
// C:\project2.0\MyccAngel\mycc-angel-server\src\modules\register\register.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegister } from '../model/user-register';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(UserRegister)
    private userRepository: Repository<UserRegister>,
  ) {}

  async createUser(userData: UserRegister): Promise<UserRegister> {
    return this.userRepository.save(userData);
  }

  async getAllUsers(): Promise<UserRegister[]> {
    return this.userRepository.find();
  }
}

