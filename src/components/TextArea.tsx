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
      name=''
      id=''
      autoFocus={type === 'from'}
      placeholder={getPlaceHolder({ type, loading })}
      value={value}
      onChange={handleChange}
    ></textarea>
  )
}

export default TextArea
