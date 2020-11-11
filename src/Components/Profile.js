import React from "react";
import { connect } from "react-redux";
import Logout from "../Logout";
import { Link, Redirect } from "react-router-dom";
import "../css/profile.css";
const Profile = ({ user }) => {
  if (user) <Redirect to="/profile/" />;
  else return <Redirect to="/products/" />;

  return (
    <>
      <div className="container pt-5">

        <div className="card">
          <div className="card-header text-center">
            {user.username}
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-6 pb-5">
                <div className="image">
                  <div className="trick"></div>
                </div>
              </div>
              <div className="col-md-5">
                <p>First Name{user.first_name}</p>
                <p>Last Name{user.last_name}</p>
                <p>email {user.email}</p>
                <p>mobile {user.phone}</p>
                <Logout />
                <Link to="/add-address" className="btn btn-primary">
                  add address
                </Link>
                <Link to="/address" className="btn btn-primary">
                  my address
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="b">
        <div className="box">
          <div id="overlay">
            <div className="image">
              <div className="trick"></div>
              <ul className="text">HHHH{user.first_name}</ul>
              <div className="text1">HHHH{user.username}</div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading " role="tab" id="headingOne">
                    <h4 className="panel-title ">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded=""
                        aria-controls="collapseOne"
                      >
                        <div className="title  btn btn-danger btn-outline btn-lg">
                          PERSONAL INFO
                      </div>
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p className="p">username: {user.username}</p>
                      <p className="p">email : {user.email}</p>
                      <p className="p">First Name : {user.first_name}</p>
                      <p className="p">Last Name : {user.last_name}</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="title btn btn-danger btn-outline btn-lg">
                          SETTING
                      </div>
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p className="p">
                        Logout : <Logout />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Profile);
