import { useEffect } from 'react'
import FocusTrap from 'focus-trap-react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`
const Content = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  padding: 2rem;
  min-width: 300px;
  max-width: 90vw;
  position: relative;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
`
const CloseBtn = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Overlay data-testid="modal-overlay" onClick={onClose}>
      <FocusTrap>
        <Content onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
          <CloseBtn onClick={onClose} data-testid="modal-close">✕</CloseBtn>
          {children}
        </Content>
      </FocusTrap>
    </Overlay>
  )
}