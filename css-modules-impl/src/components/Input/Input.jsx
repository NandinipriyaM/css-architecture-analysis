import styles from './Input.module.css'

export default function Input({
  label,
  helperText,
  error,
  prefixIcon,
  suffixIcon,
  dataTestId = 'input-default',
  ...props
}) {
  return (
    <div className={`${styles.field} ${error ? styles.error : ''}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {prefixIcon && <span className={styles.icon}>{prefixIcon}</span>}
        <input className={styles.input} data-testid={dataTestId} {...props} />
        {suffixIcon && <span className={styles.icon}>{suffixIcon}</span>}
      </div>
      {helperText && !error && <small className={styles.helper}>{helperText}</small>}
      {error && <small className={styles.errorText}>{error}</small>}
    </div>
  )
}