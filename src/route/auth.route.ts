import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { AuthController } from '../app/http/controller/auth.controller'
import { authResource } from '../app/http/resource'

@Controller('/auth')
export class AuthRoute {
  constructor(private readonly authController: AuthController) {}

  @Post('/login')
  @HttpCode(200)
  async getHello(@Body() req: authResource.loginReq): Promise<authResource.loginRes> {
    return await this.authController.login(req)
  }
}
