import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    /* --background-menu : #f1f2f8; */
    --background-opac: ;
    --text-menu: #3b3c3d;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    font-size: 100%;
    font-family: 'Noto Sans HK', sans-serif;
    background: var(--background-opac);
  }
  @media (min-width: 600px) {
    html, body {
    font-size: 100%;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;