import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  /* padding: 0 100px; */
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  .inner-wrapper {
    width: 100%;
  }

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.tertiary};
    /* font-size: 50px; */
  }

  .job-title {
    color: var(--light-orange);
  }

  h3 {
    margin: 0 0 20px;
  }

  p {
    max-width: 600px;
  }

  .greet {
    color: var(--light-slate);
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Container>
      <Content>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition timeout={5000} classNames="fadeup" nodeRef={ref}>
              <div className="inner-wrapper" ref={ref}>
                <p className="greet">Hi, my name is</p>
                <h1>Nicholas Brunoro</h1>
                <h1 className="job-title">Software Engineer</h1>
                <p>
                  {`I'm a software engineer aspring on turning ideas into 
                reality through coding and design. I am currently seeking my next
                oppurtunity to create something spectacular with wonderful people!`}
                </p>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Content>
    </Container>
  );
};

export default Hero;
