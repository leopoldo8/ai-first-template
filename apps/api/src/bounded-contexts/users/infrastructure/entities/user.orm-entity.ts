// TypeORM entity — uncomment when TypeORM is installed
//
// import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
//
// @Entity('user')
// export class UserOrmEntity {
//   @PrimaryColumn()
//   id!: string
//
//   @Column()
//   name!: string
//
//   @Column({ unique: true })
//   email!: string
//
//   @Column({ default: true })
//   isActive!: boolean
//
//   @CreateDateColumn()
//   createdAt!: Date
//
//   @UpdateDateColumn()
//   updatedAt!: Date
// }

export class UserOrmEntity {
  id!: string
  name!: string
  email!: string
  isActive!: boolean
  createdAt!: Date
  updatedAt!: Date
}
