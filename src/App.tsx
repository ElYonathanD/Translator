import './App.css'
import LanguageSelector from './components/LanguageSelector'
import useLanguageTranslation from './hooks/useLanguageTranslation'

function App() {
  const { state, interchangeLanguages, setFromLanguage, setToLanguage } =
    useLanguageTranslation()
  return (
    <div>
      <h1>Translate</h1>
      <div>
        <div>
          <p>from {state.fromLanguage}</p>
          <LanguageSelector
            type='from'
            value={state.fromLanguage}
            onChange={setFromLanguage}
          />
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
          <p>to {state.toLanguage}</p>

          <LanguageSelector
            type='to'
            value={state.toLanguage}
            onChange={setToLanguage}
          />
        </div>
      </div>
    </div>
  )
}

export default App
