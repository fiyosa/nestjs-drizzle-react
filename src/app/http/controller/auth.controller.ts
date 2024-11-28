import { HttpStatus, Injectable } from '@nestjs/common'
import { authResource } from '../resource'
import { LoggerConfig } from '../../../config/logger.config'
import { ZodConfig } from '../../../config/zod.config'
import { RequestHelper } from '../../helper/request.helper'
import { AuthRequest } from '../request/auth.request'

@Injectable()
export class AuthController {
  constructor(
    private readonly log: LoggerConfig,
    private readonly requestHelper: RequestHelper,
    private readonly z: ZodConfig,
    private readonly authReq: AuthRequest
  ) {}

  async login(req: authResource.loginReq): Promise<authResource.loginRes> {
    try {
      const validated: authResource.loginReq = this.z.validate(this.authReq.login, req)

      this.log.console.info(validated)
      return {
        access_token: '123',
      }
    } catch (err: any) {
      this.requestHelper.sendException(err, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
