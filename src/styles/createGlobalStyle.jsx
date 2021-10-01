import { createGlobalStyle} from 'styled-components'
import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  margin: auto;
`;


export const GlobalStyle = createGlobalStyle`
  :root {
    /* --background-menu : #f1f2f8; */
    --background-opac: #7f8ac7;
    --text-menu: #3b3c3d;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
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