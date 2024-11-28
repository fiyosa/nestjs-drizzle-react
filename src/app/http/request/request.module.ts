import { Global, Module } from '@nestjs/common'
import { AuthRequest } from './auth.request'

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [AuthRequest],
  exports: [AuthRequest],
})
export class RequestModule {}
