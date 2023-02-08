import { createGlobalStyle } from 'styled-components';
import Transitions from './transitions';

const GlobalStyles = createGlobalStyle`
  :root{
    --dark-navy: #020c1b;
    --navy-shadow: #06141d;
    
  }

  ${Transitions}
  html, 
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background: ${(props) => props.theme.main};
    margin:0;
    font-size: 25px;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;;
  }  
  html {
    scrollbar-width:thin;
    scrollbar-color: red blue;
  }
  ::-webkit-scrollbar {
    /* background: white; */
    width: 13px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.main};
    /* background: red; */
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondary};
    border: 3px solid ${({ theme }) => theme.main};
    border-radius: 10px;
  }
`;

export default GlobalStyles;
