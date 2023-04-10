import React from 'react';
import styled from 'styled-components';
import Email from './email';
import Socials from './socials';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  /* justify-content: center; */
  align-items: center;
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
