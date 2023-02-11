import React, { useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";

const User = () => {
  let [userDetails, setUserDetails] = useState(0);
  let [userId, setUserId] = useState();
  let [token, setToken] = useState(0);

  if (token == 0) {
    setToken(localStorage.getItem("Token"));
    setUserId(localStorage.getItem("UserId"));
  }

  if (!userDetails) {
    let Obj = {
      method: "get",
      url: `http://localhost:3001/user/${userId}/profile`,
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(userId);
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setUserDetails(res);
    });
  }

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Header />
      {userDetails != 0 && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={userDetails.profileImage}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{
                      width: "180px",
                      height: "100%",
                      borderRadius: "40%",
                    }}
                  />
                  <h5 className="my-3">{userDetails.fname}</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Follow
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userDetails.fname} {userDetails.lname}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userDetails.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{userDetails.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {userDetails.address.shipping.street}{" "}
                        {userDetails.address.shipping.city}{" "}
                        {userDetails.address.shipping.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
