import React, { useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";

const User = () => {
  let [userDetails, setUserDetails] = useState(0);
  let [userId, setUserId] = useState();
  let [token, setToken] = useState(0);
  let navigate = useNavigate();
  let [file, setfile] = useState(null);

  if (token === 0) {
    setToken(localStorage.getItem("Token"));
    setUserId(localStorage.getItem("UserId"));
  }

  if (!userDetails) {
    let Obj = {
      method: "get",
      url: `/user/${userId}/profile`,
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(userId);

    fetchDataFromApi(Obj)
      .then((res) => {
        //console.log(res);
        setUserDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (userDetails == null) {
      navigate("/login");
    }
  }

  const LogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const onFormSubmit = (e) => {
    if (file) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", file);
      let Obj = {
        method: "put",
        url: `/user/${userId}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };
      fetchDataFromApi(Obj)
        .then((res) => {
          console.log(res);
          localStorage.setItem("ProfileUrl", res.profileImage);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let UpdateBtn = "none";
  if (file) {
    UpdateBtn = "block";
  }

  const onInputChange = (e) => {
    setfile(e.target.files[0]);
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Header />
      {userDetails !== 0 && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div
                  className="card-body text-center"
                  style={{ justifyContent: "center" }}
                >
                  <div style={{justifyContent:"center"}}>
                    <label>
                      <img
                        src={
                          userDetails.profileImage != null
                            ? userDetails.profileImage
                            : "https://www.pngitem.com/pimgs/m/78-786501_black-avatar-png-user-icon-png-transparent-png.png"
                        }
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{
                          cursor: "pointer",
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                        }}
                      />

                      <input
                        type="file"
                        name="photo"
                        onChange={onInputChange}
                        style={{ display: "none", color: "white" }}
                      ></input>
                    </label>


                  <button
                    type="submit"
                    style={{ display: `${UpdateBtn}` , marginLeft:"45%"}}
                    onClick={onFormSubmit}
                  >
                    Update
                  </button>
                  </div>


                  {/* <image
                    id="profileImage"
                    src="http://lorempixel.com/100/100"
                  /> */}

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            LogOut();
          }}
          type="button"
          className="btn btn-primary"
          style={{ width: "150px" }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default User;
