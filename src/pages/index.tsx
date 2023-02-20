import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import styled from 'styled-components';
import Hero from '@/Components/Hero/Hero';
import Header from '@/Components/Header/Header';
import Skills from '@/Components/sections/skills';
import Work from '@/Components/sections/work';
import Education from '@/Components/sections/education';
import Projects from '@/Components/sections/projects';
import About from '@/Components/sections/About';
import StyledRevealSection from '@/Components/sections/StyledRevealSection';
import Layout from '@/Components/layout';

const inter = Inter({ subsets: ['latin'] });

const StyledMain = styled.main``;

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Layout>
          <Hero />
          <StyledRevealSection>
            <About />
          </StyledRevealSection>
          <Work />
          <Projects />
          <Education />
        </Layout>
      </StyledMain>
      {/* <Skills /> */}
    </>
  );
}
