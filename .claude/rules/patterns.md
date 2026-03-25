# Clean Architecture Patterns

## Backend (NestJS)

### Use Case Pattern

```typescript
@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(dto: CreateUserDto): Promise<IUser> {
    const entity = UserMapper.toDomain(dto)
    return this.userRepository.save(entity)
  }
}
```

### Repository Interface (Domain Layer)

```typescript
export interface IUserRepository {
  findById(id: string): Promise<IUser | null>
  save(user: IUser): Promise<IUser>
  delete(id: string): Promise<void>
}
```

### Controller (Presentation Layer)

```typescript
@Controller('users')
export class UserController {
  constructor(private readonly createUser: CreateUserUseCase) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<IApiResponse<IUser>> {
    const user = await this.createUser.execute(dto)
    return { success: true, data: user }
  }
}
```

### API Response Format

```typescript
interface IApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: { total: number; page: number; limit: number }
}
```

## Frontend (Next.js)

### Server Component (default)

```typescript
export default async function UsersPage() {
  const users = await fetchUsers()
  return <UserList users={users} />
}
```

### Client Component (interactive only)

```typescript
'use client'
export function UserForm({ onSubmit }: IUserFormProps) {
  const [name, setName] = useState('')
  // ...
}
```
