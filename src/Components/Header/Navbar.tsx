import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  padding: 0 20px;
  ul {
    /* padding: 0; */
    /* width: 80%; */
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    color: var(--light-grey);
  }

  li {
  }

  a {
    transition: 200ms;
  }
  a:hover {
    color: ${({ theme }) => theme.tertiary};
    transition: 300ms;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a>Work</a>
        </li>
        <li>
          <a>Education</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
