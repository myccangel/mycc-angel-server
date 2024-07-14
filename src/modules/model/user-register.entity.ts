/* eslint-disable prettier/prettier */
// src/modules/model/user-register.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class UserRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @ManyToOne(() => Address, { cascade: true })
  address: Address;
}
