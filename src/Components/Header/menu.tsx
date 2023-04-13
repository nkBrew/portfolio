import React, { useEffect, useState } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import NavLinks from './navlinks';
import useMenuStore from '@/stores/menuStore';

const StyledMenu = styled.div<{ show: boolean }>`
  display: flex;
  align-items: center;
  button {
    position: relative;
    z-index: 15;
    background-color: inherit;
    border: none;
    color: var(--orange);
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledAside = styled.div<{ menuShowing: boolean }>`
  position: fixed;
  /* top: 0;
  right: 0;
  bottom: 0;
  width: 400px; */
  inset: 0 0 0 200px;
  height: 100vh;
  z-index: 10;
  background: var(--navy);
  transition-duration: 250ms;
  /* display: none; */
  transform: translateX(${({ menuShowing }) => (menuShowing ? 0 : '100vw')});
  ${({ menuShowing }) =>
    menuShowing &&
    css`
      body {
        height: 100%;
        overflow-y: hidden;
      }
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    padding: 25px 5px;

    li {
      padding: 25px;
      text-align: center;

      a:hover {
        color: var(--orange);
        transition: 300ms;
      }
    }

    .li-pdf {
      a {
        padding: 5px 10px;
      }
    }
  }
`;

const Menu = () => {
  const { show, toggleShow } = useMenuStore((state) => state);

  useEffect(() => {
    if (show) {
      document.body.className = 'no-scroll';
      // document.body.style.height = '100vh';
      // document.body.style.overflow = 'hidden';
      return;
    }
    document.body.className = '';
  }, [show]);
  return (
    <StyledMenu show={show}>
      <button onClick={() => toggleShow()}>
        <FiAlignRight />
      </button>
      <StyledAside menuShowing={show}>
        <ul>
          <NavLinks onClick={() => toggleShow()} />
        </ul>
      </StyledAside>
    </StyledMenu>
  );
};

export default Menu;
