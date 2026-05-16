import styled from 'styled-components'

const ToggleButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`

export default function ThemeToggle({ toggle, current }) {
  const isDark = current.colors.bg === '#111827' // quick check
  return (
    <ToggleButton data-testid="theme-toggle" onClick={toggle}>
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </ToggleButton>
  )
}