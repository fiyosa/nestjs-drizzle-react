/* eslint-disable @typescript-eslint/no-require-imports */
import * as i18next from 'i18next'
import { en } from './en.lang'
import { id } from './id.lang'
import { EnvConfig } from '../config/env.config'

const lang = { en, id }
export const langResource: i18next.Resource = {
  id: { zod: require('zod-i18n-map/locales/id/zod.json') },
  en: { zod: require('zod-i18n-map/locales/en/zod.json') },
}

export const __ = (msg: keyof ILang, args?: any) => {
  const env = new EnvConfig()
  let newMsg: string = lang[env.APP_LOCALE as keyof typeof lang][msg]
  if (typeof args === 'object' && !Array.isArray(args) && args !== null) {
    Object.keys(args).map((arg: string) => (newMsg = newMsg.replace(':' + arg, args[arg])))
    return newMsg
  }
  return newMsg
}

export interface ILang {
  user: string
  contact: string
  address: string

  retrieved_successfully: string
  saved_successfully: string
  updated_successfully: string
  deleted_successfully: string

  unauthorized: string
  save_failed: string
  delete_failed: string
  something_went_wrong: string
  not_found: string
}
