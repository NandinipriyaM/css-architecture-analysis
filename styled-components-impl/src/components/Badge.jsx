import styled from 'styled-components'

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #fff;
  background-color: ${({ theme, variant }) => theme.colors[variant] || theme.colors.info};

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `padding: 0.15rem 0.5rem; font-size: 0.75rem;`
      case 'md':
      default:
        return `padding: 0.25rem 0.75rem; font-size: 0.875rem;`
    }
  }}
`

export default function Badge({ variant = 'info', size = 'md', children, dataTestId }) {
  return (
    <StyledBadge variant={variant} size={size} data-testid={dataTestId || `badge-${variant}`}>
      {children}
    </StyledBadge>
  )
}