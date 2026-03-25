import type { IEntity, ITimestamped } from '@ai-first/shared-types'

export interface IUser extends IEntity, ITimestamped {
  readonly name: string
  readonly email: string
  readonly isActive: boolean
}

export function createUser(params: {
  readonly id: string
  readonly name: string
  readonly email: string
}): IUser {
  return {
    id: params.id,
    name: params.name,
    email: params.email,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}
