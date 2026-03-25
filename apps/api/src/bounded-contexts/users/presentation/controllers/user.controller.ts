import type { IApiResponse } from '@ai-first/shared-types'
import { createApiResponse } from '@ai-first/shared-utils'
import type { CreateUserDto } from '../../application/dtos/create-user.dto.js'
import { UserMapper, type IUserResponse } from '../../application/mappers/user.mapper.js'
import type { CreateUserUseCase } from '../../application/use-cases/create-user.use-case.js'
import type { GetUserUseCase } from '../../application/use-cases/get-user.use-case.js'

// When NestJS is installed:
// import { Controller, Get, Post, Body, Param } from '@nestjs/common'

// @Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
  ) {}

  // @Post()
  async create(dto: CreateUserDto): Promise<IApiResponse<IUserResponse>> {
    const user = await this.createUserUseCase.execute(dto)
    return createApiResponse(UserMapper.toResponse(user))
  }

  // @Get(':id')
  async findOne(id: string): Promise<IApiResponse<IUserResponse>> {
    const user = await this.getUserUseCase.execute(id)
    return createApiResponse(UserMapper.toResponse(user))
  }
}
