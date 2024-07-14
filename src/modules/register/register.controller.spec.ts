/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UserRegister } from '../model/user-register';

describe('RegisterController', () => {
  let controller: RegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterController],
      providers: [RegisterService],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Given user register validation, when name is empty, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.name = '';

    await validateFail(userRegister);
  });

  it('Given user register validation, when email is empty, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.email = '';

    await validateFail(userRegister);
  });
  it('Given user register validation, when email is invalid, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.email = 'invalid';

    await validateFail(userRegister);
  });

  it('Given user register validation, when password is empty, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.password = '';

    await validateFail(userRegister);
  });
  it('Given user register validation, when password is invalid, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.password = '123456';

    await validateFail(userRegister);
  });

  it('Given user register validation, when phone is empty, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.phone = '';

    await validateFail(userRegister);
  });
  it('Given user register validation, when phone is invalid, then return error 400', async () => {
    const userRegister = createUserRegister();
    userRegister.password = 'invalid';

    await validateFail(userRegister);
  });





  async function validateFail(userRegister: UserRegister) {
    await validate(userRegister).catch((error) => {
      expect(error.getResponse().statusCode).toEqual(400);
    });
  }

  async function validate(userRegister: UserRegister) {
    const validationPipe = new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    try {
      await validationPipe.transform(userRegister, {
        type: 'body',
        metatype: UserRegister,
      });
    } catch (error) {
      throw error;
    }
  }

  function createUserRegister() {
    return {
      name: 'AnyName',
      email: 'any@email.com',
      password: 'anyPassword',
      phone: 'anyPhone',
      address: {
        street: 'anyStreet',
        complement: 'anyComplement',
        city: 'anyCity',
        number: 'AnyNumber',
        zipCode: 'anyZipCode',
        country: 'anyCountry',
      },
    } ;
  }
});
