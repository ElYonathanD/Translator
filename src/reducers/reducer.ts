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
        loading: state.fromText !== '',
        result: '',
        fromText: state.result,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    case actionType.SET_FROM_LANGUAGE:
      if (state.fromLanguage === action.payload) return state
      return {
        ...state,
        loading: state.fromText !== '',
        result: '',
        fromLanguage: action.payload
      }
    case actionType.SET_TO_LANGUAGE:
      if (state.toLanguage === action.payload) return state

      return {
        ...state,
        loading: state.fromText !== '',
        result: '',
        toLanguage: action.payload
      }
    case actionType.SET_FROM_TEXT:
      return {
        ...state,
        loading: action.payload !== '',
        result: '',
        fromText: action.payload
      }
    case actionType.SET_RESULT:
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    default:
      return state
  }
}
