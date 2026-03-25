import type { IUser } from '../../domain/entities/user.entity.js'
import type { IUserRepository } from '../../domain/repositories/user.repository.interface.js'

// @Injectable()
export class GetUserUseCase {
  constructor(
    // @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(id)
    if (!user) {
      throw new Error(`User with id ${id} not found`)
    }
    return user
  }
}
