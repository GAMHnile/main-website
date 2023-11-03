import * as React from "react";
import Features from "../Features";
import { navigate } from "gatsby";

const Products = ({ blurbs }) => (
  <div
    className="column is-12 section-mt"
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <p className="title has-text-centered">Products</p>
    <Features gridItems={blurbs} />
    <button className="cta cta-blue" onClick={() => navigate("/products")}>
      See all products
    </button>
  </div>
);

export default Products;
