const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children,
  } = props

  return (
    <button
      className={`button ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
