import { Global, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AuthController } from './auth.controller'

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [AppController, AuthController],
  exports: [AppController, AuthController],
})
export class ControllerModule {}
