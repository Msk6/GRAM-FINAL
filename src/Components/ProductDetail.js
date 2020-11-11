import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/actions";
import "../css/productdetail.css";
const ProductDetail = ({ products, addItem }) => {
  const { productID } = useParams();

  const product = products.find((product) => product.id === +productID);
  const [item, setItem] = useState({
    product: product,
    qty: 1,
  });
// Add to cart
  const [btnValue, setBtnValue] = useState("btn btn-primary")
  const [btnName, setBtnName] = useState("Add to cart")
  const [viewCart, setViewCart] = useState("")

  if (!product) return <Redirect to="/products/" />;

  //display list of images product
  const productImage = product.images.map((image) => (
    <div className="carousel-item ">
      <img src={image} className="rounded" />
    </div>

    //               </div> <div className="image">
    //   <img src={image} />
    // </div>
  ));

  const textChangeHandler = (event) => {
    setItem({ ...item, qty: +event.target.value });
  };

  const handleClick = () => {
    addItem(item);
    setBtnValue("btn btn-success")
    setBtnName("successfuly added")
    setViewCart(<Link to="/cart" className="btn btn-info">view cart</Link>)

  };

  return (
    <div className="container mt-5" key={productID}>
      <div className="card">
        <div className="card-header">Product Detail</div>
        <div class="container">
          <div class="row d-flex justify-content-center my-5 py-5">
            <div class="col-md-6">
              <div
                id="myCarousel"
                class="carousel slide"
                data-ride="carousel"
                align="center"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {" "}
                    <img src={product.images[0]} class="rounded" />{" "}
                  </div>
                  <div class="carousel-item">
                    {" "}
                    <img src={product.images[1]} class="rounded" />{" "}
                  </div>
                  <div class="carousel-item">
                    {" "}
                    <img src={product.images[2]} class="rounded" />{" "}
                  </div>
                </div>
                <ol class="carousel-indicators list-inline">
                  <li class="list-inline-item active">
                    {" "}
                    <a
                      id="carousel-selector-0"
                      class="selected"
                      data-slide-to="0"
                      data-target="#myCarousel"
                    >
                      {" "}
                      <img
                        src={product.images[0]}
                        class="img-fluid rounded"
                      />{" "}
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a
                      id="carousel-selector-1"
                      data-slide-to="1"
                      data-target="#myCarousel"
                    >
                      {" "}
                      <img
                        src={product.images[1]}
                        class="img-fluid rounded"
                      />{" "}
                    </a>{" "}
                  </li>
                  <li class="list-inline-item">
                    {" "}
                    <a
                      id="carousel-selector-2"
                      data-slide-to="2"
                      data-target="#myCarousel"
                    >
                      {" "}
                      <img
                        src={product.images[2]}
                        class="img-fluid rounded"
                      />{" "}
                    </a>{" "}
                  </li>
                </ol>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6></h6>
              <p>description: {product.description}</p>
              <p>stock : {product.stock}</p>
              <p>Price : {product.price} SAR</p>

              <input
                type="number"
                className="form-control my-3"
                value={item.qty}
                name="qty"
                onChange={textChangeHandler}
              />
              {item.qty <= product.stock && item.qty > 0 ? (
                <button className={btnValue} onClick={handleClick}>
                  {btnName}
                </button>
              ) : null}
              {viewCart}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ products }) => ({
  products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
