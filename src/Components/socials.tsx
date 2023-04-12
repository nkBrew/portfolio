import React from 'react';
import styled from 'styled-components';
import { FiCodepen, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import socialLinks from './socialLinks';

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
      svg {
        width: 15px;
        height: 15px;
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

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <ul>
        {socialLinks.map((sl, i) => (
          <li className="social-link-pop" key={`sl-${i}`}>
            <a href={sl.url}>{sl.svg}</a>
          </li>
        ))}
      </ul>
    </StyledSocials>
  );
};

export default Socials;
