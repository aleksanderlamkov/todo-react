const Field = (props) => {
  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    onInput,
  } = props

  return (
    <div className={`field ${className}`}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={onInput}
      />
    </div>
  )
}

export default Field
