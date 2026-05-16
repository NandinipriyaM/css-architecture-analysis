import { useEffect } from 'react'
import FocusTrap from 'focus-trap-react'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, children }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} data-testid="modal-overlay" onClick={onClose}>
      <FocusTrap>
        <div className={styles.content} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
          <button className={styles.closeBtn} onClick={onClose} data-testid="modal-close">✕</button>
          {children}
        </div>
      </FocusTrap>
    </div>
  )
}