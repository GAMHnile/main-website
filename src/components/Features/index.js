import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => {
  const pathname = window.location.pathname;
  const products = pathname === "/" ? gridItems.slice(0, 2) : gridItems;

  return (
    <div className="columns is-multiline">
      {products.map((item) => (
        <div key={item.text} className="is-parent column">
          <section
            className={`blog-list-item tile is-child products-card notification`}
          >
            <div className="has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <p>{item.text}</p>
            <Link className="button" to={item.link}>
              View product →
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
