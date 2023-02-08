import { css } from 'styled-components';

const Transitions = css`
  .fadeup-enter {
    opacity: 0;
  }

  .fadeup-enter-active {
    opacity: 1;
    transition: opacity 700ms;
  }
  .fadeup-exit {
    opacity: 1;
  }
  .fadeup-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

export default Transitions;
