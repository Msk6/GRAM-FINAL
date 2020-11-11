import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const CartList = ({ cart }) => {
  const cartCards = cart.items.map((item) => (
    <CartCard key={item.id} item={item} />
  ));

  return (
    <div className="px-4 px-lg-0">
      <div className="container text-white py-5 text-center">
        <h1 className="display-4">MY CART</h1>
        <p className="lead mb-0"></p>
      </div>
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    {cartCards} */}
                  {cart.items.length ? (
                    <tbody>
                      {cartCards}
                      {/* <p>Total</p>
                      <p>subtotal: {cart.subtotal}</p>
                      <p>tax: {cart.tax}</p>
                      <p>total: {cart.total}</p>
                      <Link to="/checkout">
                        <button className="btn btn-success">
                          Proceed to checkout
                        </button>
                      </Link> */}
                    </tbody>
                  ) : (
                    <tbody>
                      <p>Cart is empty</p>
                    </tbody>
                  )}
                </table>
              </div>
            </div>
            <div class="row py-5 p-4 bg-white rounded shadow-sm">
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Coupon code
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div class="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Apply coupon"
                      aria-describedby="button-addon3"
                      class="form-control border-0"
                    />
                    <div class="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        class="btn btn-dark px-4 rounded-pill"
                      >
                        <i class="fa fa-gift mr-2"></i>Apply coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Instructions for seller
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Order Subtotal </strong>
                      <strong>{cart.subtotal}</strong>
                    </li>
                    {/* <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Shipping and handling</strong>
                      <strong>$10.00</strong>
                    </li> */}
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Tax</strong>
                      <strong>{cart.tax}</strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Total</strong>
                      <h5 class="font-weight-bold"> {cart.total}</h5>
                    </li>
                  </ul>
                  <Link to="/checkout">
                    <a
                      href="#"
                      class="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to checkout
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(CartList);
