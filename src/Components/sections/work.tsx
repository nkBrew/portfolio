import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
// import sr from '@/utils/sr';
// import sr from 'scrollreveal';

const StyledWork = styled.div`
  margin: auto;
  width: 90%;
  background: blue;
  height: 500px;
`;

const StyledWorkInner = styled.div`
  display: flex;
`;

const StyledTabList = styled.div`
  position: relative;
  width: 200px;
  flex-shrink: 0;
`;

const StyledTabButton = styled.button`
  margin: 0;
  padding: 0;
  width: 100%;
  background: grey;
  display: flex;
  border: none;
  border-left: 2px solid black;
  height: 50px;
  align-items: center;
  padding: 0 20px;

  &:hover,
  &:focus {
    background: yellow;
  }
`;

const StyledTabHighlight = styled.div<{ activeTab: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 5px;
  background: green;
  border-radius: 2px;
  z-index: 10;

  transform: translateY(calc(${({ activeTab }) => activeTab}*50px));
  transition: 200ms;
`;

const StyledPanel = styled.div`
  margin-left: 20px;
  /* width: 500px; */
  h3 {
    margin-top: 0;
  }
`;

const workData = [
  {
    title: 'Looking For Work',
    tabTitle: 'Present Day',
    company: '',
    url: '',
    date: 'Present',
    notes: [
      `After Taking some time for myself I am currently looking for my next oppurtunity to grow and contribute to a great team!`,
    ],
  },
  {
    title: 'Backend Engineer',
    tabTitle: 'JustEatTakeaway',
    company: 'SkipTheDishes/JustEatTakeaway',
    url: 'https://www.justeattakeaway.com/',
    date: 'November 2019 - June 2021',
    notes: [
      `Maintained the Backend Delivery Logic systems and algorithms for the Dispatch & Logistics team`,
      `Introduced new Cache systems with Redis to speed up system performance`,
      `Brought up new microservices with a modern and automattic approach on AWS via Terraform`,
      `Introduced a feature that allowed the viewing and parsing for Delivery and Courier analytics via Elastic Search`,
    ],
  },
  {
    title: 'Full Stack Developer',
    tabTitle: 'SkipTheDishes',
    company: 'SkipTheDishes/JustEatTakeaway',
    url: 'https://www.justeattakeaway.com/',
    date: 'May 2018 - November 2019',
    notes: [
      `Implemented numerous features for the Courier Acquisition team including Courier Documents, and Bag Ordering & Fulfillment, as well as the company's internal system to maintain and view these features`,
      `Contributed to the maintanence of code issues on the front and back end systems`,
      `Collaborated with team members locally and remotely`,
      `Proposed and planned a transition from Javascript to Typescript for the Courier Acquisition Landing Page`,
    ],
  },
];

const Work = () => {
  const styledWorkRef = useRef(null);
  const { ref, inView } = useInView();
  const [activeTab, setActiveTab] = useState(1);

  console.log(inView);
  const panelData = workData[activeTab];
  return (
    <>
      <StyledWork ref={ref}>
        <h2>Work</h2>
        <StyledWorkInner>
          <StyledTabList>
            {workData.map((data, i) => (
              <StyledTabButton
                key={`TabButton-${i}`}
                onClick={() => setActiveTab(i)}
              >
                {data.tabTitle}
              </StyledTabButton>
            ))}
            {/* <StyledTabButton onClick={() => setActiveTab(0)}>B</StyledTabButton> */}
            {/* <StyledTabButton onClick={() => setActiveTab(1)}>C</StyledTabButton> */}
            <StyledTabHighlight activeTab={activeTab} />
          </StyledTabList>
          <StyledPanel>
            <h3>
              <span>{panelData.title}</span>&nbsp;@&nbsp;
              <span>
                <a href={panelData.url} target="_blank" rel="noreferrer">
                  {panelData.company}
                </a>
              </span>
            </h3>
            <p>{panelData.date}</p>
            <div>
              <ul>
                {panelData.notes.map((note, j) => (
                  <li key={`WorkDataNotes-${j}`}>{note}</li>
                ))}
              </ul>
            </div>
          </StyledPanel>
        </StyledWorkInner>
      </StyledWork>
    </>
  );
};

export default Work;
