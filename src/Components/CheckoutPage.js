import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";
import { Link, Redirect } from "react-router-dom";
import { checkout, resetErrors } from "../redux/actions";

const CheckoutPage = ({
  addresses,
  user,
  orderCheckout,
  errorMsg,
  resetErrors,
  cart,
}) => {
  // create list of items with specific structure
  const items = cart.items.map((item) => ({
    product: item.product.id,
    qty: item.qty,
  }));

  useEffect(() => {
    return () => {
      if (errorMsg.length) resetErrors();
    };
  }, []);

  const [order, setOrder] = useState({
    total: cart.total,
    tax: cart.tax,
    address: "",
    items: items,
  });
  const [selectedAddress, setSelectedAddress] = useState("");
  // send one item from list to display in card
  const addressCard = addresses.map((address) => (
    <AddressCard
      key={address.id}
      address={address}
      setSelectedAddress={setSelectedAddress}
      checkout={true}
    />
  ));

  const placeOrder = () => {
    const newOrder = { ...order, address: selectedAddress.id };
    setOrder(newOrder);
    orderCheckout(newOrder);
  };
  if (!user) return <Redirect to="/login" />;
  if (!cart.items.length) return <Redirect to="/cart" />;

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
              <div className="col-lg-10">
                <h3> Choose your delivery address</h3>
                <div className="row">{addressCard}</div>
                <div>
                  <h5>Selected Address</h5>
                  <AddressCard
                    key={selectedAddress.id}
                    address={selectedAddress}
                    checkout={false}
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="card-body">
                  <h5 className="card-title">Total</h5>
                  <p className="card-text">Subtotal :{order.total}</p>
                  <p className="card-text">Tax:{order.tax} </p>
                  <p className="card-text">Total:{order.total + order.tax} </p>
                </div>
              </div>
            </div>
            {selectedAddress ? (
              <Link to="/products">
                <button
                  className="btn btn-primary deactivate"
                  onClick={placeOrder}
                >
                  Place order
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ addresses, user, errorMsg, cart }) => ({
  addresses,
  user,
  errorMsg,
  cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    orderCheckout: (newOrder) => dispatch(checkout(newOrder)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
