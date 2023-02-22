import React from 'react';
import styled from 'styled-components';

const StyledEmail = styled.div`
  position: fixed;
  bottom: 0;
  right: 15px;
  display: flex;
  flex-direction: column;
  height: 200px;
  writing-mode: vertical-rl;
  font-size: 12px;
  letter-spacing: 0.1em;
  a {
    display: inline-block;
    cursor: pointer;
    transition: 200ms;
    svg {
      width: 15px;
      height: 15px;
    }
    &:hover,
    &:focus {
      transform: translateY(-5px);
      color: var(--light-orange);
    }
  }
`;

const Email = () => {
  return (
    <StyledEmail>
      <a>nicholasjwb@gmail.com</a>
    </StyledEmail>
  );
};

export default Email;
