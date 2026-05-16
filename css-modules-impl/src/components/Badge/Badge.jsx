import styles from './Badge.module.css'

export default function Badge({ variant = 'info', size = 'md', children, dataTestId }) {
  const classNames = `${styles.badge} ${styles[variant]} ${styles[size]}`
  return (
    <span className={classNames} data-testid={dataTestId || `badge-${variant}`}>
      {children}
    </span>
  )
}