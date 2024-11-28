import { Injectable } from '@nestjs/common'
import * as winston from 'winston'

@Injectable()
export class LoggerConfig {
  public readonly file = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
    transports:
      process.env.APP_ENV === 'development'
        ? [
            new winston.transports.File({
              filename: 'src/storage/log/nest.log',
              format: winston.format.combine(
                winston.format.printf((info) => {
                  const message =
                    typeof info.message === 'object' ? JSON.stringify(info.message, null, 2) : info.message
                  return `${info.timestamp} ${info.level}: ${message}`
                })
              ),
            }),
          ]
        : [],
  })

  public readonly console = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
    transports:
      process.env.APP_ENV === 'development'
        ? [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf((info) => {
                  const message =
                    typeof info.message === 'object' ? JSON.stringify(info.message, null, 2) : info.message
                  return `${info.timestamp} ${info.level}: ${message}`
                })
              ),
            }),
          ]
        : [],
  })
}
