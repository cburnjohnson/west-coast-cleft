import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/homepage/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>West Coast Cleft</h1>
    <Header />
    <StaticImage
      src="../images/homepage-pup.png"
      width={600}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      style={{
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
      }}
      alt="Puppy held in a hand"
    />
  </Layout>
);

export default IndexPage;
