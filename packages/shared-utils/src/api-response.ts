import type { IApiResponse, IApiMeta } from '@ai-first/shared-types'

export function createApiResponse<T>(
  data: T,
  meta?: IApiMeta,
): IApiResponse<T> {
  return {
    success: true,
    data,
    ...(meta ? { meta } : {}),
  }
}

export function createErrorResponse(error: string): IApiResponse<never> {
  return {
    success: false,
    error,
  }
}
