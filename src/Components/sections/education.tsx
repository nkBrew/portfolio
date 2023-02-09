import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const StyledEducationSection = styled.section`
  margin: auto;
  max-width: 900px;
  background: green;
`;

const StyledEducationInner = styled.div`
  display: flex;
`;

const StyledEducationPanel = styled.div`
  background: red;
  width: 80%;
  h3 {
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    filter: grayscale(1) brightness(0.7) contrast(4);
    transition: 200ms;
    :hover {
      filter: none;
      transform: scale(1.2);
      transition: 200ms;
    }
  }
`;

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const className = inView ? 'fadeup-enter-active' : 'fadeup-enter';
  return (
    <>
      <StyledEducationSection id="education" ref={ref} className={className}>
        <StyledEducationInner>
          <StyledEducationPanel>
            <h2>Education</h2>
            <h3>University of Saskatchewan</h3>
            <h4>B.S. in Computer Science</h4>
            <ul>
              <li>
                My time spent studying was focused on Artificial Intelligence,
                Vision and Image Processing, and Computer Graphics
              </li>
              <li>
                In addition I also studied courses in Game Design, Mobile and
                Cloud Computing, Computer Networks, and Physics.
              </li>
              <li>I graduated with Distinction</li>
            </ul>
          </StyledEducationPanel>
          <StyledImageWrapper>
            <a href="https://www.usask.ca/">
              <Image
                alt=""
                src="/university-of-saskatchewan-logo.png"
                width={100}
                height={100}
              ></Image>
            </a>
          </StyledImageWrapper>
        </StyledEducationInner>
      </StyledEducationSection>
    </>
  );
};

export default Education;
