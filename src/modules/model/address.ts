/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class Address{
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  complement: string;

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string
}

