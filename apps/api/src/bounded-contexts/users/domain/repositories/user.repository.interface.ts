import type { IUser } from '../entities/user.entity.js'

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findAll(): Promise<readonly IUser[]>
  save(user: IUser): Promise<IUser>
  delete(id: string): Promise<void>
}

export const USER_REPOSITORY_TOKEN = 'IUserRepository'
