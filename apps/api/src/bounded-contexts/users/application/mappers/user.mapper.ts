import type { IUser } from '../../domain/entities/user.entity.js'
import { createUser } from '../../domain/entities/user.entity.js'
import { generateId } from '@ai-first/shared-utils'
import type { CreateUserDto } from '../dtos/create-user.dto.js'

export class UserMapper {
  static toDomain(dto: CreateUserDto): IUser {
    return createUser({
      id: generateId(),
      name: dto.name,
      email: dto.email,
    })
  }

  static toResponse(user: IUser): IUserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    }
  }
}

export interface IUserResponse {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly isActive: boolean
  readonly createdAt: string
  readonly updatedAt: string
}
