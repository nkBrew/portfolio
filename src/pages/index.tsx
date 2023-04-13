import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import styled, { css } from 'styled-components';
import Hero from '@/Components/Hero/Hero';
import Header from '@/Components/Header/Header';
import Skills from '@/Components/sections/skills';
import Work from '@/Components/sections/work';
import Education from '@/Components/sections/education';
import Projects from '@/Components/sections/projects';
import About from '@/Components/sections/About';
import StyledRevealSection from '@/Components/sections/StyledRevealSection';
import Layout from '@/Components/layout';
import Contact from '@/Components/sections/contact';
import Footer from '@/Components/sections/footer';
import useMenuStore from '@/stores/menuStore';

const inter = Inter({ subsets: ['latin'] });

const StyledMain = styled.main<{ menuShowing: boolean }>`
  display: flex;
  justify-content: center;
  padding: 0 100px;
  transition: 250ms filter linear;
  ${({ menuShowing }) =>
    menuShowing &&
    css`
      filter: blur(5px);
    `}
`;

export default function Home() {
  const { show } = useMenuStore((state) => state);
  console.log(show);
  return (
    <>
      <Header />
      <StyledMain menuShowing={show}>
        <Layout>
          <Hero />
          <StyledRevealSection>
            <About />
          </StyledRevealSection>
          <Work />
          <StyledRevealSection>
            <Projects />
          </StyledRevealSection>
          <StyledRevealSection>
            <Education />
          </StyledRevealSection>
          <StyledRevealSection>
            <Contact />
          </StyledRevealSection>
        </Layout>
      </StyledMain>
      <Footer />

      {/* <Skills /> */}
    </>
  );
}
