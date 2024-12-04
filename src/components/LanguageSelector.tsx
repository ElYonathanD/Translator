import { useEffect, useRef, useState } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)

  const handleSelect = (language: string) => {
    onChange(language as Language)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='language-selector' ref={ref}>
      <div className='selected-language' onClick={() => setIsOpen(!isOpen)}>
        {SUPPORTED_LANGUAGES[value as Language] || 'auto'}
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
