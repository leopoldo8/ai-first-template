export interface IApiResponse<T> {
  readonly success: boolean
  readonly data?: T
  readonly error?: string
  readonly meta?: IApiMeta
}

export interface IApiMeta {
  readonly total: number
  readonly page: number
  readonly limit: number
}
