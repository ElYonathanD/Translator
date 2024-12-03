import './App.css'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import useLanguageTranslation from './hooks/useLanguageTranslation'

function App() {
  const {
    state,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useLanguageTranslation()
  return (
    <div>
      <h1>Translate</h1>
      <div>
        <div>
          <LanguageSelector
            type='from'
            value={state.fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea type='from' onChange={setFromText} value={state.fromText} />
        </div>
        <div>
          <button onClick={interchangeLanguages}>
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
        <div>
          <LanguageSelector
            type='to'
            value={state.toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            type='to'
            loading={state.loading}
            onChange={setResult}
            value={state.result}
          />
        </div>
      </div>
    </div>
  )
}

export default App
