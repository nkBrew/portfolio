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
  /* display: flex; */
  list-style: none;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 400px;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 600px) {
    padding: 10px 0;
    background: var(--navy);
    border-radius: 5px;

    margin-bottom: 20px;
  }
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

  p {
    margin-bottom: 10px;
  }

  .project-links {
    > * {
      padding: 5px 15px;
    }
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 1/2;

    text-align: center;

    h3,
    p {
      margin: 0;
    }
    .project-links {
      display: flex;
      justify-content: center;
      align-items: center;
      > * {
        padding: 5px 15px 0;
      }
    }
  }
`;

const StyledProjectImage = styled.div`
  grid-column: 1 / 8;
  grid-row: 1/-1;

  div {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      object-fit: contain;
    }
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: -2/-1;
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
    img: '/PathfinderVisualizer.png',
    gif: '',
    stack: 'React Typescript SASS',
  },
  {
    title: 'Not Another Chat App',
    gitUrl: 'https://github.com/nkBrew/not_another_chat_app',
    demoUrl: 'https://not-another-chat-app-client.vercel.app/',
    description: `1A real time chat application I built to show off my full stack capabilities and learn MERN Stack, sockets, and tailwind`,
    img: '/not-another-chat-app.png',
  },
];

const Projects = () => {
  return (
    <>
      <StyledProjectsSection id="projects">
        <StyledProjectsInner>
          <h2 className="section-heading">Projects</h2>
          <ul>
            {ProjectData.map((project, i) => (
              <StyledProject key={`project-${i}`}>
                <StyledProjectContent>
                  <h3>{project.title}</h3>
                  <div className={'project-content-description'}>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-links">
                    <a href={project.gitUrl}>
                      <FiGithub />
                    </a>
                    <a href={project.demoUrl}>
                      <FiExternalLink />
                    </a>
                  </div>
                </StyledProjectContent>
                <StyledProjectImage>
                  <div>
                    <Image src={project.img} fill alt=""></Image>
                  </div>
                </StyledProjectImage>
              </StyledProject>
            ))}
          </ul>
        </StyledProjectsInner>
      </StyledProjectsSection>
    </>
  );
};

export default Projects;
