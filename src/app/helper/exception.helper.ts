import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'
import { ZodError } from 'zod'

@Catch(ZodError, HttpException)
export class ExceptionHelper implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const res: Response = host.switchToHttp().getResponse()

    if (exception instanceof HttpException) {
      let err: any = exception.getResponse()
      this.getException(err, res, exception)
    } else {
      this.getException(exception, res, exception)
    }
  }

  private getException(err: any, res: Response, exception: any) {
    if (this.apiNotFound(err)) {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'API not found' })
      return
    }

    if (this.dbError(err, res)) return

    if (err instanceof ZodError) {
      res.status(HttpStatus.BAD_REQUEST).json({
        errors: err.issues,
        message: 'Invalid data',
      })
      return
    }

    res.status(exception?.response?.status ?? exception.getStatus() ?? 500).json({
      message: exception?.message ?? err ?? 'Internal server error',
    })
  }

  private apiNotFound(err: any) {
    return typeof err === 'object' &&
      err !== null &&
      err?.statusCode === 404 &&
      err?.error === 'Not Found' &&
      String(err?.message).includes('Cannot ')
      ? true
      : false
  }

  private dbError(_: any, __: Response) {
    // if (err instanceof PrismaClientInitializationError) {
    //   res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Cannot connect to database' })
    //   return true
    // }

    // if (err instanceof PrismaClientKnownRequestError && err.code === 'P2003') {
    //   res.status(HttpStatus.BAD_REQUEST).json({ message: `${err.meta?.modelName} already exist` })
    //   return true
    // }

    return false
  }
}
