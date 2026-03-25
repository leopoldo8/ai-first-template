import type { IUser } from '../../domain/entities/user.entity.js'
import type { IUserRepository } from '../../domain/repositories/user.repository.interface.js'

// When TypeORM is installed:
// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
// import { UserOrmEntity } from '../entities/user.orm-entity.js'

// @Injectable()
export class TypeOrmUserRepository implements IUserRepository {
  // constructor(
  //   @InjectRepository(UserOrmEntity)
  //   private readonly repository: Repository<UserOrmEntity>,
  // ) {}

  private readonly store: Map<string, IUser> = new Map()

  async findById(id: string): Promise<IUser | null> {
    return this.store.get(id) ?? null
  }

  async findByEmail(email: string): Promise<IUser | null> {
    for (const user of this.store.values()) {
      if (user.email === email) return user
    }
    return null
  }

  async findAll(): Promise<readonly IUser[]> {
    return [...this.store.values()]
  }

  async save(user: IUser): Promise<IUser> {
    this.store.set(user.id, user)
    return user
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id)
  }
}
