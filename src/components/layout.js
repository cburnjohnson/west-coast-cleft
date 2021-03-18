/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './layout/Navbar';
import '../styles/main.css';
import MobileNavbar from './layout/MobileNavbar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MobileNavbar />
      <div>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
