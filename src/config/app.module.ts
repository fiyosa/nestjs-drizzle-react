import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvConfig } from './env.config'
import { LoggerConfig } from './logger.config'
import { ZodConfig } from './zod.config'
import { HelperModule } from '../app/helper/helper.module'
import { ControllerModule } from '../app/http/controller/controller.module'
import { RequestModule } from '../app/http/request/request.module'
import { RouteModulea } from '../route/route.module'

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RouteModulea, ControllerModule, HelperModule, RequestModule],
  controllers: [],
  providers: [EnvConfig, LoggerConfig, ZodConfig],
  exports: [EnvConfig, LoggerConfig, ZodConfig],
})
export class AppModule {}
