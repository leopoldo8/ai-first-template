// NestJS module -- uncomment when NestJS is installed
//
// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { UserOrmEntity } from './infrastructure/entities/user.orm-entity.js'
// import { TypeOrmUserRepository } from './infrastructure/repositories/typeorm-user.repository.js'
// import { CreateUserUseCase } from './application/use-cases/create-user.use-case.js'
// import { GetUserUseCase } from './application/use-cases/get-user.use-case.js'
// import { UserController } from './presentation/controllers/user.controller.js'
// import { USER_REPOSITORY_TOKEN } from './domain/repositories/user.repository.interface.js'
//
// @Module({
//   imports: [TypeOrmModule.forFeature([UserOrmEntity])],
//   controllers: [UserController],
//   providers: [
//     CreateUserUseCase,
//     GetUserUseCase,
//     {
//       provide: USER_REPOSITORY_TOKEN,
//       useClass: TypeOrmUserRepository,
//     },
//   ],
//   exports: [CreateUserUseCase, GetUserUseCase],
// })
// export class UsersModule {}

export class UsersModule {}
