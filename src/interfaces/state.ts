import { FromLanguage, Language } from '../types/languages'

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}
