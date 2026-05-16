import styled, { css } from 'styled-components'

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  width: 280px;
  transition: box-shadow 0.2s, background-color 0.3s;

  ${({ hoverable }) => hoverable && css`
    &:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  `}
`

const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 600;
`
const Body = styled.div`
  padding: 1rem;
`
const Footer = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`

export default function Card({ header, children, footer, hoverable, dataTestId = 'card-default' }) {
  return (
    <StyledCard hoverable={hoverable} data-testid={dataTestId}>
      {header && <Header>{header}</Header>}
      <Body>{children}</Body>
      {footer && <Footer>{footer}</Footer>}
    </StyledCard>
  )
}