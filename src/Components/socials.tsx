import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const StyledSocials = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 200px;
  /* width: 50px; */
  /* bottom: 50px; */
  left: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  li {
    a {
      padding: 5px;
      display: inline-block;
      cursor: pointer;
      transition: 200ms;
      svg {
        width: 15px;
        height: 15px;
      }
      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--light-orange);
      }
    }
  }
  &:after {
    content: '';
    /* display: inline-block; */
    width: 1px;
    height: 200px;
    flex-grow: 1;
    background: white;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        <li>
          <a>
            <FiGithub />
          </a>
        </li>
        <li>
          <a>
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a>
            <FiInstagram />
          </a>
        </li>
      </ul>
    </StyledSocials>
  );
};

export default Socials;
