import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default Layout;
