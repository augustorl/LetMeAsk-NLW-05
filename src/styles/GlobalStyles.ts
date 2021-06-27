import { createGlobalStyle } from 'styled-components';
import { Theme } from '../contexts/ThemeProvider';


export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.white50};
    color: ${({ theme }) => theme.colors.white50};
  }
  
  body, input, button, textarea {
    font: 300 16px 'Roboto', sans-serif;
  }
`