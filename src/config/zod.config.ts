import { Injectable } from '@nestjs/common'
import { ZodType, z } from 'zod'

@Injectable()
export class ZodConfig {
  public readonly type: ZodType

  public readonly set = z

  validate<T>(zodType: ZodType<T>, data: T): T {
    return zodType.parse(data)
  }
}
