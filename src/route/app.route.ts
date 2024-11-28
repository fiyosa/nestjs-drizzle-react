import { Controller, Get } from '@nestjs/common'
import { AppController } from '../app/http/controller/app.controller'

@Controller()
export class AppRoute {
  constructor(private readonly appController: AppController) {}

  @Get('/')
  getHello(): string {
    return this.appController.getHello()
  }

  @Get('/env')
  getEnv(): any {
    return this.appController.getEnv()
  }
}
