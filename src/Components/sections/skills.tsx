import React from 'react';
import styled from 'styled-components';

const slideUpAnimation = {};

const StyledSection = styled.div`
  margin: 100px;
  background: red;
`;

const StyledSkillsBoxContainer = styled.div`
  margin: 20px;
  background: yellow;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: ;
  }

  li {
    flex: 1;
  }
`;

const Skills = () => {
  return (
    <StyledSection id="skills">
      <h3>Skills</h3>
      <p>
        I am always looking to pick up new launguages and frameworks. The
        following are technologies that I have experience in.
      </p>
      <StyledSkillsBoxContainer>
        <ul>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
          <li>React</li>
        </ul>
      </StyledSkillsBoxContainer>
    </StyledSection>
  );
};

export default Skills;
