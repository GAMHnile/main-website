import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => {
  const isBrowser = typeof window !== "undefined";
  const pathname = isBrowser ? window.location.pathname : "";
  const products = pathname === "/" ? gridItems.slice(0, 2) : gridItems;

  return (
    <div className="columns is-multiline justify-center">
      {products.map((item) => (
        <div key={item.text} className="is-parent is-6 column">
          <section className={`blog-list-item tile is-child products-card`}>
            <PreviewCompatibleImage imageInfo={item} />
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
