import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div
        key={item.text}
        className="is-parent column is-6"
        style={{ marginBottom: "48px" }}
      >
        <section
          className={`blog-list-item tile is-child products-card notification`}
        >
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p>{item.text}</p>
          <Link className="button" to={"https://google.com"}>
            View product →
          </Link>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
