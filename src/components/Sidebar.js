import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";

const Sidebar = () => {
  /**
   * useStaticQuery(graphql) can only be used once inside a component
   */

  const data = useStaticQuery(graphql`
    query MyInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav className="relative container mx-auto">
      <div className="flex mx-auto items-center justify-between">
        <div>
          {title}
          {/* <img src={logo} alt="company logo" /> */}
        </div>
        <div className="flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/career">Career</Link>
          <Link to="/services/training">Training</Link>
          <Link to="/services/taxplanning">Tax Planning</Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
