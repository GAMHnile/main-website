import * as React from "react";
import Features from "../Features";
import { navigate } from "gatsby";

const Products = ({ blurbs }) => (
  <div
    className="column is-12"
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: "104px",
    }}
  >
    <p className="title align-center">Products</p>
    <Features gridItems={blurbs} />
    <button className="cta cta-blue" onClick={() => navigate("/products")}>
      See all products
    </button>
  </div>
);

export default Products;
