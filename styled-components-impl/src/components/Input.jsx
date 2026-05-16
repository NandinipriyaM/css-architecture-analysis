import styled from 'styled-components'

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`
const Label = styled.label`
  font-weight: 500;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ $error, theme }) => $error ? theme.colors.danger : theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.2s;
`
const StyledInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`
const Icon = styled.span`
  padding: 0 0.75rem;
  font-size: 1.2rem;
`
const Helper = styled.small`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8rem;
`
const ErrorText = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.8rem;
`

export default function Input({ label, helperText, error, prefixIcon, suffixIcon, dataTestId = 'input-default', ...props }) {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Wrapper $error={!!error}>
        {prefixIcon && <Icon>{prefixIcon}</Icon>}
        <StyledInput data-testid={dataTestId} {...props} />
        {suffixIcon && <Icon>{suffixIcon}</Icon>}
      </Wrapper>
      {helperText && !error && <Helper>{helperText}</Helper>}
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  )
}