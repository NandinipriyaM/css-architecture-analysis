import styles from './Card.module.css'

export default function Card({ header, children, footer, hoverable = false, dataTestId = 'card-default' }) {
  const cardClass = `${styles.card} ${hoverable ? styles.hoverable : ''}`
  return (
    <div className={cardClass} data-testid={dataTestId}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}