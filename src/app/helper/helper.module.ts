import { Global, Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { ExceptionHelper } from './exception.helper'
import { RequestHelper } from './request.helper'

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: ExceptionHelper }, RequestHelper],
  exports: [RequestHelper],
})
export class HelperModule {}
