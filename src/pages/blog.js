import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, Link } from "gatsby";

const blog = ({ data }) => {
  console.log({ data });
  const posts = data.allMarkdownRemark.nodes;
  return (
    <PageLayout>
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold uppercase mb-10">
          Check all my Blog Post
        </h1>
        <div>
          {posts.map((post) => (
            <Link to={"/blog/" + post.frontmatter.title} key={post.id}>
              <div className="py-5">
                <h3 className="font-bold text-2xl">
                  {post.frontmatter.title}{" "}
                </h3>
                <p className="text-base"> {post.frontmatter.services} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default blog;

export const query = graphql`
  query BlogPost {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      nodes {
        frontmatter {
          address
          services
          title
        }
        id
      }
    }
  }
`;
