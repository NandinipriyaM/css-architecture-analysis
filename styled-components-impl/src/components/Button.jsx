import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: #ffffff !important;   /* beat global !important rule */

  ${({ variant, theme }) => {
    const color = theme.colors[variant] || theme.colors.primary
    const hoverColor = variant === 'primary' ? theme.colors.primaryHover : color
    return css`
      background-color: ${color};
      &:hover:not(:disabled) {
        background-color: ${hoverColor};
        filter: brightness(0.9);
      }
    `
  }}

  ${({ size }) => {
    const sizes = {
      sm: css`padding: 0.4rem 0.8rem; font-size: 0.875rem;`,
      md: css`padding: 0.5rem 1rem; font-size: 1rem;`,
      lg: css`padding: 0.75rem 1.5rem; font-size: 1.125rem;`,
    }
    return sizes[size] || sizes.md
  }}

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
`

export default function Button({ variant = 'primary', size = 'md', disabled, children, onClick, dataTestId, ...props }) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      data-testid={dataTestId || `button-${variant}`}
      {...props}
    >
      {children}
    </StyledButton>
  )
}