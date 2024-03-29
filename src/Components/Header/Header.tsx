import {
  ScrollDirection,
  useScrollDirection,
} from '@/hooks/useScrollDirection';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';

interface StyledHeaderProps {
  scrollDir: ScrollDirection;
  scrollAtTop: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  width: 100%;
  height: 100px;
  /* background: var(--dark-navy); */
  background: rgba(17, 24, 39, 0.85);
  display: flex;
  justify-content: space-between;
  color: var(--light-grey);
  transition: 200ms;
  z-index: 50;
  backdrop-filter: blur(10px);

  ${(props) =>
    props.scrollDir === ScrollDirection.UP &&
    !props.scrollAtTop &&
    css`
      height: 80px;
      transition: 200ms;
      transform: translateY(0);
      box-shadow: 0 5px 15px 2px var(--navy-shadow);
    `}

  ${(props) =>
    props.scrollDir === ScrollDirection.DOWN &&
    css`
      height: 80px;
      transition: 300ms;
      transform: translateY(-150px);
    `}
`;

const Header = () => {
  const scrollDir = useScrollDirection(ScrollDirection.UP);
  const [scrollAtTop, setScrollAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollAtTop(window.scrollY < 50);
      console.log('***feafe*', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <StyledHeader scrollDir={scrollDir} scrollAtTop={scrollAtTop}>
        <div> Nick</div>
        <Navbar></Navbar>
      </StyledHeader>
    </>
  );
};

export default Header;
