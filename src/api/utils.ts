import { Internal as LienInternal } from 'lien/fetch'

import type { AxiosRequestConfigLike, DefineObject } from 'lien'

export class Internal extends LienInternal {
  async preRequest(req: AxiosRequestConfigLike, _obj: DefineObject): Promise<AxiosRequestConfigLike> {
    return req
  }

  async postResponse(res: any, _obj: DefineObject): Promise<any> {
    return res
  }
}

export interface BaseData {
  // TODO: Define the common properties of the response data
}

export interface BaseResponse<T = any> {
  errorcode: number
  errormsg: string
  data: T & BaseData
}

export type EmptyObject = Record<string, never>

export interface Pagination<T = any> {
  result: T[]
  pageInfo: {
    total: string
    pageCount: number
    pageSize: number
    curPage: number
  }
}
