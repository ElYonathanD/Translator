import { SUPPORTED_LANGUAGES } from '../constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = 'auto'
export type FromLanguage = Language | AutoLanguage
