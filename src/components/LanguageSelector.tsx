import { useState } from 'react'
import './languageSelector.css'
import { SUPPORTED_LANGUAGES } from '../constants'
import { FromLanguage, Language } from '../types/languages'

type Props =
  | {
      type: 'from'
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: 'to'
      value: Language
      onChange: (language: Language) => void
    }
const LanguageSelector = ({ type, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (language: string) => {
    onChange(language as Language)
    setIsOpen(false)
  }

  return (
    <div className='language-selector'>
      <div className='selected-language' onClick={() => setIsOpen(!isOpen)}>
        {value}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </div>
      {isOpen && (
        <div className='dropdown'>
          {type == 'from' && (
            <div
              className={`dropdown-item ${value === 'auto' ? 'active' : ''}`}
              onClick={() => handleSelect('auto')}
            >
              Detectar Idioma
            </div>
          )}
          {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <div
              key={key}
              className={`dropdown-item ${value === key ? 'active' : ''}`}
              onClick={() => handleSelect(key as string)}
            >
              {literal}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
