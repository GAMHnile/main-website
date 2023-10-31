import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

export default function FullWidthImage({
  height = 350,
  img,
  title,
  subheading,
  imgPosition = "top left",
  cta,
}) {
  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          paddingTop: "4rem",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              height,
              width: "100%",
            }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              height: height,
            }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
            }}
          >
            <div className="container">
              <div
                className="column is-10 is-offset-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {title && (
                  <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                      color: "white",
                      lineHeight: "1",
                      padding: "0.25em",
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  >
                    {title}
                  </h1>
                )}
                {subheading && (
                  <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                      color: "white",
                      lineHeight: "1",
                      padding: "0.25rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {subheading}
                  </h3>
                )}
                {cta && (
                  <button
                    className="cta"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Get in touch
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
