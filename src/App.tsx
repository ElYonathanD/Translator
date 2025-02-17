import { useEffect } from 'react'
import './App.css'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import useLanguageTranslation from './hooks/useLanguageTranslation'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'
import ActionButtons from './components/ActionButtons'

function App() {
  const {
    state,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useLanguageTranslation()

  const text = useDebounce(state.fromText)
  useEffect(() => {
    if (text == '') return
    translate({
      fromLanguage: state.fromLanguage,
      toLanguage: state.toLanguage,
      text
    })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [text, state.toLanguage, state.fromLanguage])

  return (
    <>
      <h1 style={{ marginBlock: '15px' }}>Translator</h1>
      <div className='translate-container'>
        <div className='second-container'>
          <LanguageSelector
            type='from'
            value={state.fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea type='from' onChange={setFromText} value={state.fromText} />
        </div>
        <div>
          <button className='btn-interchange' onClick={interchangeLanguages}>
            <svg
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              fill='#fff'
            >
              <g data-name='82-Arrow Exchange'>
                <path d='m23.29 15.29 1.41 1.41 7-7a1 1 0 0 0 0-1.41l-7-7-1.41 1.42L28.59 8H0v2h28.59zM8.71 16.71l-1.42-1.42-7 7a1 1 0 0 0 0 1.41l7 7 1.41-1.41L3.41 24H32v-2H3.41z' />
              </g>
            </svg>
          </button>
        </div>
        <div className='second-container'>
          <LanguageSelector
            type='to'
            value={state.toLanguage}
            onChange={setToLanguage}
          />
          <div className='result-container'>
            <TextArea
              type='to'
              loading={state.loading}
              onChange={setResult}
              value={state.result}
            />
            <ActionButtons
              result={state.result}
              toLanguage={state.toLanguage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
