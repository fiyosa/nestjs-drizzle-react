import { Injectable } from '@nestjs/common'
import { ZodConfig } from '../../../config/zod.config'

@Injectable()
export class AuthRequest {
  constructor(private readonly z: ZodConfig) {}

  readonly login: typeof this.z.type = this.z.set.object({
    username: this.z.set.string().trim().min(1).max(100),
    password: this.z.set.string().trim().min(1).max(100),
  })
}
