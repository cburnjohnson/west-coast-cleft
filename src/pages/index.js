import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../components/homepage/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
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
    </div>
  </Layout>
);

export default IndexPage;
