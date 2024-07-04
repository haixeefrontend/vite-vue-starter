import type { Internal as LienInternal } from 'lien'
import type { BaseResponse, EmptyObject } from '../utils'

declare module 'lien' {
  export interface Internal<TConfig> {
    home(params?: EmptyObject, config?: TConfig): Promise<BaseResponse<any>>
  }
}

export default function (Internal: typeof LienInternal<any>) {
  Internal.define([
    {
      name: 'home',
      url: '/home',
    },
  ])
}
