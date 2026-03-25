// When class-validator is installed, add decorators:
// import { IsString, IsEmail, MinLength } from 'class-validator'

export class CreateUserDto {
  // @IsString()
  // @MinLength(2)
  readonly name!: string

  // @IsEmail()
  readonly email!: string
}
