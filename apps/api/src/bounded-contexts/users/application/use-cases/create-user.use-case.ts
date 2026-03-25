import type { IUser } from '../../domain/entities/user.entity.js'
import type { IUserRepository } from '../../domain/repositories/user.repository.interface.js'
import type { CreateUserDto } from '../dtos/create-user.dto.js'
import { UserMapper } from '../mappers/user.mapper.js'

// When NestJS is installed:
// import { Injectable, Inject, ConflictException } from '@nestjs/common'
// import { USER_REPOSITORY_TOKEN } from '../../domain/repositories/user.repository.interface.js'

// @Injectable()
export class CreateUserUseCase {
  constructor(
    // @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const existing = await this.userRepository.findByEmail(dto.email)
    if (existing) {
      throw new Error(`User with email ${dto.email} already exists`)
    }

    const user = UserMapper.toDomain(dto)
    return this.userRepository.save(user)
  }
}
