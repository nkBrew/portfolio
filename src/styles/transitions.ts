import { css } from 'styled-components';

const Transitions = css`
  .fadeup-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 700ms, transform 700ms;
  }

  .fadeup-exit {
    opacity: 1;
  }

  .fadeup-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

export default Transitions;
