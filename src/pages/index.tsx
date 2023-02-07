import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import styled from 'styled-components';
import Hero from '@/Components/Hero/Hero';
import Header from '@/Components/Header/Header';
import Skills from '@/Components/sections/skills';

const Foobar = styled.div``;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
    </>
  );
}
