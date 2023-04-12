import React from 'react';
import styled from 'styled-components';
import Email from './email';
import Socials from './socials';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  /* margin: 0; */
  padding: 0 80px;
  /* width: 100%; */
  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 400px;
    /* background: red; */
  }
  /* justify-content: center; */
  /* align-items: center; */
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledContent>
        <Socials />
        <Email />
        {children}
      </StyledContent>
    </>
  );
};

export default Layout;
