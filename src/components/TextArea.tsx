import './textArea.css'
interface Props {
  type: string
  loading?: boolean
  value: string
  onChange: (value: string) => void
}
const getPlaceHolder = ({
  type,
  loading
}: {
  type: string
  loading?: boolean
}) => {
  if (type == 'from') return 'Introducir texto'
  if (loading) return 'Cargando...'
  return 'Traducción'
}
const TextArea = ({ type, loading, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
  return (
    <textarea
      autoFocus={type === 'from'}
      placeholder={getPlaceHolder({ type, loading })}
      value={value}
      disabled={type === 'to'}
      onChange={handleChange}
      style={
        type === 'to'
          ? { backgroundColor: '#bfbfbf', height: 'calc(100% - 30px)' }
          : {}
      }
    ></textarea>
  )
}

export default TextArea
