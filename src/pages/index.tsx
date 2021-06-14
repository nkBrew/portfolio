import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Header from './header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <div>
    <Header />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </div>
);

export default IndexPage;
