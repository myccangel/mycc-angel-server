/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';

@Module({
  imports: [RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
