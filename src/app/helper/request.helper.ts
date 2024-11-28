import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class RequestHelper {
  constructor() {}

  sendException(err: any, statusCode?: HttpStatus) {
    throw new HttpException(err, statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
