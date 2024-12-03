import { useEffect } from 'react'
import './App.css'
import LanguageSelector from './components/LanguageSelector'
import TextArea from './components/TextArea'
import useLanguageTranslation from './hooks/useLanguageTranslation'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

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

  const handleClipboard = () => {
    navigator.clipboard.writeText(state.result)
  }
  const handleSpeak = () => {
    const utterThis = new SpeechSynthesisUtterance(state.result)
    utterThis.lang = state.toLanguage
    speechSynthesis.speak(utterThis)
  }
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
              fill='#000'
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
          <div style={{ position: 'relative' }}>
            <TextArea
              type='to'
              loading={state.loading}
              onChange={setResult}
              value={state.result}
            />
            <div style={{ display: 'flex', position: 'absolute' }}>
              <button onClick={handleClipboard}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#000'
                    d='M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z'
                  />
                </svg>
              </button>
              <button onClick={handleSpeak}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
