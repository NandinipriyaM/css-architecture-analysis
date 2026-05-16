import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s, color 0.3s;
  }
`