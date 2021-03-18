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
      <Header />
      <StaticImage
        src="../images/homepage-pup.png"
        width={598}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Puppy held in a hand"
      />
    </div>
  </Layout>
);

export default IndexPage;
