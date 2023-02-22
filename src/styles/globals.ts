import { createGlobalStyle } from 'styled-components';
import Transitions from './transitions';

const GlobalStyles = createGlobalStyle`
  :root{
    --dark-navy: #111827;
    --navy: #212f4d;
    --navy-shadow: #06141d;
    --orange: #f66b0e;
    --light-orange: #ff9e0e;
    --light-grey: #d1d5db;
    --grey: #9ca3af;
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
    /* background: ${(props) => props.theme.main}; */
    background: var(--dark-navy);
    margin:0;
    font-size: 25px;
    min-height: 100%;
    color: var(--light-grey)
  }

  main {
    padding: 0 80px;
  }

  h1,
  h2,
  h3,
  h4,h5,h6 {
    color: var(--light-slate)
  }

  p {
    color: var(--grey)
  }

  a {
    color: inherit;
    text-decoration: none;;
  }  
  html {
    scrollbar-width:thin;
    scrollbar-color: red blue;
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding:0;
  }

  .section-heading {
    display:flex;
    align-items: center;

    &:before {
      content:'checkout';
      color: var(--orange);
      font-size: 1rem;
      align-self:flex-end;
      position:relative;
      bottom: 5px;
      margin-right:10px;
    }
    &:after {
      content:'';
      margin-left: 20px;
      display:block;
      position:relative;
      /* top:-5px; */
      width:300px;
      height: 2px;
      background: var(--light-slate);
    }
  }

  .inline-link {
    color: var(--light-orange);
    cursor: pointer;
    position: relative;
    display: inline-block;

    &:hover,
    &:active,
    &:focus {
        ::after{  
          width:100%;
        }
    }
    &:after {
      content:'';
      position: absolute;
      width:0;
      height:2px;
      bottom:0;
      left:0;
      background:var(--light-orange);
      transition: 200ms;

    }
  
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    /* background: white; */
    width: 13px;
  }
  ::-webkit-scrollbar-track {
    background: var(--dark-navy);
    /* background: red; */
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondary};
    border: 3px solid var(--dark-navy);
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
