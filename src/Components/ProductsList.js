import React, { useState } from "react";
import { connect } from "react-redux";
// import "../App.css";
import "../css/productslist.css";
// components
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import cr1 from "../images/cr1-.png";
import cr2 from "../images/cr2-.png";
import cr3 from "../images/cr3-.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};
const ProductsList = ({ products }) => {
  const [query, setQuery] = useState("");

  //for search in list
  const filteredProduct = () => {
    return products.filter((product) => {
      console.log("products");
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  // send one item from list to display in card
  const productCards = filteredProduct().map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="wrapper">
      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3"></div>
        <div className="d4"></div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <br />

        <div className="mt-2 mb-2 my-5">
          <SearchBar onChange={setQuery} />
          <div class="jumbotron mt-5" style={{ backgroundColor: "white" }}>
            <div className="row">{productCards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductsList);
