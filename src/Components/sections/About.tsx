import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  /* background: black; */
  min-height: 500px;
  width: 100%;
`;

const whatToSay = `Hello, and nice to meet you! My name is Nicholas Brunoro and 
I enjoy working with technology, computers, and the internet! My passion for technology 
started in University after taking my first Computer Science course. I had a knack 
for hacking and solving problems, and it made it clear to me that this is what I wanted my career to be.`;

const whatToSay2 = `I have had the privelge of working in a food delivery startup 
for 3 years, and would like to try new things and meet amazing new people to learn from!
`;
const About = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <h2 className={'section-heading'}>About Myself</h2>
        <p>{whatToSay}</p>
        <p>{whatToSay2}</p>
        <p>
          Feel free to
          <span>
            {' '}
            <a className="inline-link" href="#contact">
              reach out
            </a>{' '}
          </span>
          to me to discuss the oppurtinity of working together, ask me a
          question, or simply have a chat!
        </p>
      </StyledAboutSection>
    </>
  );
};

export default About;
