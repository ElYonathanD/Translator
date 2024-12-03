import { FromLanguage, Language } from '../types/languages'

export enum actionType {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT'
}

export type Action =
  | { type: actionType.INTERCHANGE_LANGUAGES }
  | { type: actionType.SET_FROM_LANGUAGE; payload: FromLanguage }
  | { type: actionType.SET_TO_LANGUAGE; payload: Language }
  | { type: actionType.SET_FROM_TEXT; payload: string }
  | { type: actionType.SET_RESULT; payload: string }
