import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";
import "./userSignUp.css";

const UserSingUp = () => {
  let [Fname, setFname] = useState();
  let [Lname, setLname] = useState();
  let [Mobile, setMobile] = useState();
  let [gender, setGender] = useState("Male");
  let [Email, setEmail] = useState();
  let [city, setCity] = useState();
  let [street, setStreet] = useState();
  let [pincode, setPinCode] = useState();
  let [password, setPassword] = useState();
  let [conformPassword, setConfirmPassword] = useState();

  let navigate = useNavigate();

  let SingUp = () => {
    let Obj = {
      method: "post",
      url: `/register`,
      data: {
        email: Email,
        password: password,
        fname: Fname,
        lname: Lname,
        gender,
        phone: Mobile,
        address: {
          shipping: {
            street: street,
            city: city,
            pincode: pincode,
          },
          billing: {
            street: street,
            city: city,
            pincode: pincode,
          },
        },
      },
    };

    fetchDataFromApi(Obj)
      .then((res) => {
        console.log(res);
        alert("User Created Successfully");
        navigate("/Home");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="fullbody">
      <div className="header-fixed" style={{position:"fixed"}}>

<Header/>
</div>
      <div style={{marginTop:"4%"}}>
        <div>
          <h1 className="H1">Sign Up</h1>
          <h4 className="H4">It's free and only takes a minute</h4>
          <div className="Form">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ paddingRight: "30px" }}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="first name "
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
                <label>Phone No</label>
                <input
                  type="Number"
                  placeholder="mobile no"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label>Address Street </label>
                <input
                  type="text"
                  placeholder="Street"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="last name"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
                <label>Gender</label>
                <select style={{ width: "auto", height: "35px" }}>
                  <option
                    value="male"
                    onSelect={() => {
                      setGender("Male");
                    }}
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    onSelect={() => {
                      setGender("Female");
                    }}
                  >
                    Female
                  </option>
                </select>
                <label>Address City</label>
                <input
                  type="text"
                  placeholder="city"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
                <label>Address Pin Code </label>
                <input
                  type="Number"
                  placeholder="pin code"
                  onChange={(e) => {
                    setPinCode(e.target.value);
                  }}
                />
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <closeform></closeform>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                SingUp();
              }}
              className="bt"
              type="button"
              value="Submit"
            >
              Submit
            </button>
          </div>
          <p class="para-2">
            Already have an account? <a href="login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSingUp;
