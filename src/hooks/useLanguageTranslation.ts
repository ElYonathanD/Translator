import { useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'
import { actionType } from '../interfaces/action'
import { FromLanguage, Language } from '../types/languages'

const useLanguageTranslation = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: actionType.INTERCHANGE_LANGUAGES })
  }
  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: actionType.SET_FROM_LANGUAGE, payload })
  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type: actionType.SET_TO_LANGUAGE, payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type: actionType.SET_FROM_TEXT, payload })
  }
  const setResult = (payload: string) => {
    dispatch({ type: actionType.SET_RESULT, payload })
  }
  return {
    state,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}

export default useLanguageTranslation
