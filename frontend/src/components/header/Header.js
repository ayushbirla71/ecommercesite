import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  let [profileUrl, setProfileUrl]=useState();
  
  if(localStorage.getItem("ProfileUrl")){
    if (!profileUrl) {
       setProfileUrl(localStorage.getItem("ProfileUrl"));
    }

  }
  console.log(localStorage.getItem("ProfileUrl"));

  let login = () => {
    if (localStorage.getItem("UserId")) {
      navigate("/UserProfile");
    } else {
      navigate("/login");
    }
  };

  let cart = () => {
    if (localStorage.getItem("UserId")) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="home">
              Logo
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a
                  href=""
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/productList">Products</a>
              </li>
              <li>
                <a href="#">Deals</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  onClick={() => {
                    login();
                  }}
                  href="#"
                >
                  <span className="glyphicon glyphicon-user"></span> Your
                  Account
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    cart();
                  }}
                  href="#"
                >
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                </a>
              </li>
              <li>
                <img style={{width:'40px', marginTop:"15px" , borderRadius:"40%"}} alt="avatar" src={profileUrl?profileUrl:"https://cdn-icons-png.flaticon.com/512/924/924874.png"}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
