import { graphql } from "gatsby";
import React from "react";
import PageLayout from "../components/PageLayout";

const PostDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, services } = data.markdownRemark.frontmatter;
  return (
    <PageLayout>
      <div className="text-center">
        <h2>{title}</h2>
        <p> {services} </p>
        <div className="mt-9" dangerouslySetInnerHTML={{__html:html}}/>
      </div>
    </PageLayout>
  );
};

export default PostDetails;

export const query = graphql`
  query PostPage($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        services
        title
      }
    }
  }
`;
