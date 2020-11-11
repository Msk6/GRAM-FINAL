import React, { useState } from "react";
import { deleteAddress } from "../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"

const AddressCard = ({ address, checkout, setSelectedAddress, deleteAddress }) => {
    const history = useHistory()
    const [isEditable, setIsEditable] = useState(false)
    const handleClick = () => {
        setSelectedAddress(address)
    }
    return (
        <div className="container d-block py-3">
            <div className="card bg-light">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <form>
                                <div className="row py-2">
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="First name" value={address.first_name} />
                                    </div>
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="Last name" value={address.last_name} />
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="phone number" value={address.phone} />
                                    </div>
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="type e.g. home or work" value={address.address_type} />
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="Country" value={address.country} />
                                    </div>
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="City" value={address.city} />
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="Address line 1" value={address.address_line_1} />
                                    </div>
                                    <div className="col">
                                        <input type="text" disabled={!isEditable} className="form-control" placeholder="Address line 2" value={address.address_line_2} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3">
                            {isEditable ?
                                <button className="btn btn-block btn-success" onClick={() => setIsEditable(!isEditable)} >Save Edit</button>
                                :
                                <button className="btn btn-block btn-primary" onClick={() => setIsEditable(!isEditable)} > Edit</button>
                            }
                            <button className="btn btn-block btn-danger" onClick={() => deleteAddress(address.id, history)} > Delete</button>
                            {checkout ? (<button className="btn btn-block btn-success" onClick={handleClick}>Choose as delivery address</button>) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAddress: (AddressID, history) =>
            dispatch(deleteAddress(AddressID, history)),
    };
};

export default connect(null, mapDispatchToProps)(AddressCard);