import React from 'react';
import styled from 'styled-components';
import Menu from './menu';
import NavLinks from './navlinks';

const StyledNavbar = styled.div`
  display: flex;
  padding: 0 20px;
`;

const StyledLinks = styled.ul`
  /* padding: 0; */
  /* width: 80%; */
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  /* width: 400px; */
  color: var(--light-grey);

  li {
    padding: 0 10px;

    text-transform: capitalize;
  }

  a {
    transition: 200ms;
  }
  a:hover {
    color: ${({ theme }) => theme.tertiary};
    transition: 300ms;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLinks>
        {/* <li>
          <a href="#skills">Skills</a>
        </li> */}
        <NavLinks />
      </StyledLinks>
      <Menu />
    </StyledNavbar>
  );
};

export default Navbar;
