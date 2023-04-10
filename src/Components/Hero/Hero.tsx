import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  /* padding: 0 100px; */
  height: 100vh;
`;

const Content = styled.div`
  h1 {
    margin: 0 0 20px;
    color: ${({ theme }) => theme.tertiary};
    /* font-size: 50px; */
  }

  h3 {
    margin: 0 0 20px;
  }

  p {
    max-width: 300px;
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
              <div ref={ref}>
                <h1>Nicholas Brunoro</h1>

                {/* <h3>Full Stack Developer</h3> */}
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  a ex voluptatum distinctio, soluta eligendi exercitationem
                  aspernatur error quas, vitae asperiores cum doloremque ducimus
                  omnis porro, quaerat nobis! Cum, fugit.
                </p>
              </div>
              {/* <p>
              {`I'm a Full Stack Web Developer with 3 working and 9 years total of
          experience. I love to code and solve new problems.`}
            </p> */}
            </CSSTransition>
          )}
        </TransitionGroup>
      </Content>
    </Container>
  );
};

export default Hero;
