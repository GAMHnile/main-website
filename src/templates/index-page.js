import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import Services from "../components/Services";
import Products from "../components/Products";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  mainpitch,
  services,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage
        img={heroImage}
        title={title}
        cta
        height={"calc(100vh - 4rem)"}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content" style={{ marginTop: "48px" }}>
                <p className="title has-text-centered">{mainpitch.title}</p>
                <div className="tile">
                  <p className="subtitle card-content">
                    {mainpitch.description}
                  </p>
                </div>
              </div>

              {services && services?.blurbs?.length && (
                <Services services={services} />
              )}

              <Products blurbs={intro.blurbs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  services: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        services={frontmatter.services}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        services {
          title
          description
          blurbs {
            heading
            description
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
          }
          heading
          description
        }
      }
    }
  }
`;
