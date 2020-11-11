import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../redux/actions";

const CartCard = ({ item, removeItem }) => {
  const handleClick = () => {
    removeItem(item);
  };
  return (
    <tr
      style={{
        minWidth: "100%",
      }}
    >
      <td>
        <div scope="col" className="border-0">
          <div className="p-2">
            {/* <div className="image"> */}

            {item.product.image ? (
              <img
                src={item.product.image}
                alt={item.product.name}
                width="70"
                className="img-fluid rounded shadow-sm"
              />
            ) : null}

            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0">
                <a href="#" className="text-dark d-inline-block align-middle">
                  {item.product.name}
                </a>
              </h5>
              <span className="text-muted font-weight-normal font-italic d-block"></span>
            </div>
          </div>
        </div>
      </td>
      <td className="border-0 align-middle">
        <strong> {item.product.price * item.qty} SAR</strong>
      </td>
      <td className="border-0 align-middle">
        <strong>{item.qty}</strong>
      </td>
      <td className="border-0 align-middle">
        <button onClick={handleClick} className="text-dark">
          <i className="fa fa-trash"></i>
        </button>
        {/* <button className="btn btn-primary" onClick={handleClick}>Delete</button> */}
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
