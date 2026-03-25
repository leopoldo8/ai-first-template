export interface IEntity {
  readonly id: string
}

export interface ITimestamped {
  readonly createdAt: Date
  readonly updatedAt: Date
}
