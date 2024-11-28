import { Module } from '@nestjs/common'
import { AppRoute } from './app.route'
import { AuthRoute } from './auth.route'

// @Global()
@Module({
  imports: [],
  controllers: [AppRoute, AuthRoute],
  providers: [],
})
export class RouteModulea {}
