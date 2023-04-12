import React from 'react';
import styled from 'styled-components';
import socialLinks from '../socialLinks';

const StyledFooter = styled.footer`
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.8rem;
  color: var(--light-slate);
`;

const StyledSocialLinks = styled.ul`
  display: flex;

  li {
    padding: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        {socialLinks.map((sl, i) => (
          <li className="social-link-pop" key={`sl-${i}`}>
            <a href={sl.url}>{sl.svg}</a>
          </li>
        ))}
      </StyledSocialLinks>
      <div>Designed & Built by Nicholas Brunoro</div>
    </StyledFooter>
  );
};

export default Footer;
