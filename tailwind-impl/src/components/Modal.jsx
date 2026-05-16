import { useEffect } from 'react'
import FocusTrap from 'focus-trap-react'

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" data-testid="modal-overlay" onClick={onClose}>
      <FocusTrap>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 min-w-[300px] max-w-[90vw] relative shadow-xl" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
          <button className="absolute top-2 right-3 text-2xl cursor-pointer" onClick={onClose} data-testid="modal-close">✕</button>
          {children}
        </div>
      </FocusTrap>
    </div>
  )
}