import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const StyledProjectsSection = styled.section`
  .checkout {
    font-size: 1rem;
    color: var(--orange);
  }
`;

const StyledProjectsInner = styled.div``;

const StyledProject = styled.li`
  display: flex;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 400px;
`;

const StyledProjectContent = styled.div`
  grid-column: 6 / -1;
  grid-row: 1/-1;
  z-index: 5;
  text-align: right;

  .project-content-description {
    background: var(--navy);
    border-radius: 5px;
  }

  a {
    color: var(--light-grey);
    &:hover,
    &:active,
    &:focus {
      color: var(--orange);
      transition: 200ms;
    }
  }
`;

const StyledProjectImage = styled.div`
  grid-column: 1 / 7;
  grid-row: 1/-1;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      object-fit: contain;
    }
  }
`;

const ProjectData = [
  {
    title: 'Pathfinder Visualizer',
    gitUrl: 'https://github.com/nkBrew/pathfinding-visualizer',
    demoUrl: 'https://nkbrew.github.io/pathfinding-visualizer/',
    description: `Showcases several pathfinding algorithms including Dijkstra's,
    A*, Greedy, Depth First Search, and Breadth First Search, in a visual manner.`,
    learned: `I took this project as an oppurtunity to practice and learn some tools I was unfamilliar with.
    I learned alot about SASS and enjoy it quite a bit. I also wanted to learn how to create a react app from the start,
    While CRA is old by now, I still learned the basics of setting up a react app with it. 
    Learning how to host my own site by using GIthub pages was great. Its very easy and free. 
    Using github actions to automate deploys was a great thing as well. Super simple.
    Although I struggled with it, is making the webapp responsive. It still has some problems, 
    especially with the modal, but I learned alot. I'd like to fix it someday.
    `,
    img: '',
    gif: '',
    stack: 'React Typescript SASS',
  },
];

const Projects = () => {
  const projectData = ProjectData[0];
  return (
    <>
      <StyledProjectsSection>
        <StyledProjectsInner>
          <h2>
            <span className="checkout">checkout</span> Projects
          </h2>
          <ul>
            <StyledProject>
              <StyledProjectContent>
                <h3>Pathfinder Visualizer</h3>
                <div className={'project-content-description'}>
                  <p>{projectData.description}</p>
                </div>
                <div>
                  <a href={projectData.gitUrl}>
                    <FiGithub />
                  </a>
                  <a href={projectData.demoUrl}>
                    <FiExternalLink />
                  </a>
                </div>
              </StyledProjectContent>
              <StyledProjectImage>
                <div>
                  <Image src="/PathfinderVisualizer.png" fill alt=""></Image>
                </div>
              </StyledProjectImage>
            </StyledProject>
          </ul>
        </StyledProjectsInner>
      </StyledProjectsSection>
    </>
  );
};

export default Projects;
