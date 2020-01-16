import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const SupportPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SupportPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const SupportPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SupportPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

SupportPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SupportPage;

export const supportPageQuery = graphql`
  query SupportPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
