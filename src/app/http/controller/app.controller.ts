import { Injectable } from '@nestjs/common'
import { EnvConfig } from '../../../config/env.config'

@Injectable()
export class AppController {
  constructor(private readonly env: EnvConfig) {}

  getHello(): string {
    return 'Hello World!'
  }

  getEnv(): any {
    return {
      APP_ENV: this.env.APP_ENV,
      APP_PORT: this.env.APP_PORT,
      APP_LOCALE: this.env.APP_LOCALE,
      APP_SECRET: this.env.APP_SECRET,
    }
  }
}
