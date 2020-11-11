import React, { useState } from "react";
import { connect } from "react-redux";
import { addAddress } from "../redux/actions";
import { Redirect, useHistory } from "react-router-dom"

const AddAddressForm = (props) => {
  const [address, setAddress] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    city: "",
    address_line_1: "",
    address_line_2: "",
  });

  let history = useHistory()
  const options = props.countries.map(country =>
    <option value={country.id}>{country.name}</option>)

  const submitAddress = (event) => {
    event.preventDefault();
    props.addAddress(address, history);
  };

  const textChangeHandler = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value })
  }

  if (!props.user) return <Redirect to="login/" />

  return (
    <div className="container">
      <div className="card pt-5 mt-5">
        <h3 className="text-center"> Add a new Address</h3>
        <div className="mt-5 p-2">
          <form onSubmit={submitAddress}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">First Name</span>
              </div>
              <input type="text" className="form-control" value={address.first_name} name="first_name" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Last Name</span>
              </div>
              <input type="text" className="form-control" value={address.last_name} name="last_name" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Phone</span>
              </div>
              <input type="text" className="form-control" value={address.phone} name="phone" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Country</span>
              </div>
              <select className="custom-select" name="country" onChange={textChangeHandler}>
                {options}
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">City</span>
              </div>
              <input type="text" className="form-control" value={address.city} name="city" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Address line 1</span>
              </div>
              <input type="text" className="form-control" value={address.address_line_1} name="address_line_1" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Address line 2</span>
              </div>
              <input type="text" className="form-control" value={address.address_line_2} name="address_line_2" onChange={textChangeHandler} />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Address type</span>
              </div>
              <input type="text" className="form-control" value={address.address_type} name="address_type" onChange={textChangeHandler} />
            </div>
            <input className="btn btn-success btn-block" type="submit" />
          </form>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = ({ user, countries }) => ({ user, countries });

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (newAddress, history) =>
      dispatch(addAddress(newAddress, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressForm);