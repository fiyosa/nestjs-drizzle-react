import { NestFactory } from '@nestjs/core'
import { AppModule } from '../config/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { ConfigService } from '@nestjs/config'
import { NextFunction, Request, Response } from 'express'
import * as i18next from 'i18next'
import { zodI18nMap } from 'zod-i18n-map'
import { z as zod } from 'zod'
import { langResource } from '../lang/lang'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const configService = app.get(ConfigService)

  await i18next.init({
    lng: configService.get('APP_LOCALE') ?? 'en',
    resources: langResource,
  })
  zod.setErrorMap(zodI18nMap)

  app.useStaticAssets(join(process.cwd(), 'public'))
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api')) next()
    else res.sendFile(join(process.cwd(), 'src/resource/view/index.html'))
  })
  app.setGlobalPrefix('/api')

  await app.listen(configService.get('APP_PORT') ?? 4000)
}
bootstrap()
