import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <div
      className="col-lg-4 col-md-6"
      style={{ width: " 18rem;" }}
      key={product.id}
    >
      <div
        className="card m-2"
        style={{ color: "black", backgroundColor: "#f0f0f0" }}
      >
        <br></br>
        <div className="card-img-top ">
          {product.image ? (
            <img
              src={product.image}
              className="rounded item "
              alt={product.name}
            />
          ) : null}
        </div>

        <div className="card-body" style={{ backgroundColor: "#f0f0f0" }}>
          <h5 className="a" style={{ color: "#C1BBB7" }}>
            {product.name}
          </h5>

          <small className="a" style={{ color: "#C1BBB7" }}>
            Price :{product.price}{" "}
          </small>
          <br />
          <Link
            to={`/products/${product.id}`}
            // style={{ backgroundColor: "#8b4513" }}
            className="btn btn-dark rounded-pill py-2 btn-block"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
