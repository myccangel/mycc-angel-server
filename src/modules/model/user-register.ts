/* eslint-disable prettier/prettier */

import{IsEmail, IsNotEmpty, MinLength, IsMobilePhone} from "class-validator";
import { Address } from "./address";

export class UserRegister{

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsNotEmpty()
  @IsMobilePhone()
  phone: string;

  address: Address
}
