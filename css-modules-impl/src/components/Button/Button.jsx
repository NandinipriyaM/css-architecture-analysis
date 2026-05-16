import styles from './Button.module.css'

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  dataTestId,
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : ''
  ].join(' ')

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestId || `button-${variant}`}
      {...props}
    >
      {children}
    </button>
  )
}