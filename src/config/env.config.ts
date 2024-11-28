import { Injectable } from '@nestjs/common'

@Injectable()
export class EnvConfig {
  public APP_PORT = process.env.APP_PORT || '4000'
  public APP_ENV = process.env.APP_ENV || 'development'
  public APP_LOCALE = process.env.APP_LOCALE || 'en'
  public APP_SECRET = process.env.APP_SECRET || 'secret'
}
