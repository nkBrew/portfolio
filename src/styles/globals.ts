import { createGlobalStyle } from 'styled-components';
import Transitions from './transitions';

const GlobalStyles = createGlobalStyle`
  :root{
    --dark-navy: #112B3C;
    --navy-shadow: #06141d;
    --orange: #f66b0e;
    --light-grey: #EFEFEF;
    --slate: #6c7c8b;
    --light-slate: #a7c0d7;
    --fade-mixin: {
      opacity: 1;
      transition: opacity 700ms;
    }
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

  .hide {
    opacity: 0;
  }

  .fade {
    opacity: 1;
    transition: 500ms;
  }
`;

export default GlobalStyles;
