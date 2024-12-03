import { Action, actionType } from '../interfaces/action'
import { State } from '../interfaces/state'

export const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

export const reducer = (state: State, action: Action): State => {
  const { type } = action
  switch (type) {
    case actionType.INTERCHANGE_LANGUAGES:
      if (state.fromLanguage === 'auto') return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    case actionType.SET_FROM_LANGUAGE:
      return {
        ...state,
        fromLanguage: action.payload
      }
    case actionType.SET_TO_LANGUAGE:
      return {
        ...state,
        toLanguage: action.payload
      }
    case actionType.SET_FROM_TEXT:
      return {
        ...state,
        loading: true,
        fromText: action.payload
      }
    case actionType.SET_RESULT:
      return {
        ...state,
        loading: false,
        fromText: action.payload
      }
    default:
      return state
  }
}
