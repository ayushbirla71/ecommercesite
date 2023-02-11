import React, { useState } from "react";
import Header from "../components/header/Header";
import ItemDetails from "../components/Itemdetails/ItemDetails";
import { fetchDataFromApi } from "../utils/api";
import "./_home.css";

const Home = () => {
  let [products, setproductlist] = useState([]);

  //  if(!products){
  //   Product().then((res)=>{
  //    // console.log(res.props);
  //      setproductlist(res.props);
  //   })
  //  }

  if (products.length == 0) {
    let Obj={
      method:"get",
      url:`http://localhost:3001/products`,
  }
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setproductlist(res);
    });
  }

  //console.log(products)

  //console.log(fetchDataFromApi("products","get"));
  //console.log(data);
  return (
    <div>
      <Header/>
      {/* <div className="jumbotron">
        <div className="container text-center">
          <h1>Online Store</h1>
          <p>Mission, Vission & Values</p>
        </div>
      </div>

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
            <a className="navbar-brand" href="#">
              Logo
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
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
                <a href="#">
                  <span className="glyphicon glyphicon-user"></span> Your
                  Account
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="container" style={{ display: "flex" }}>
        <div>
          <div className="col-sm-4" >
            <div className="panel panel-danger" style={{ width: "300px" }}>
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img
                  src={
                    "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                  }
                  className="img-responsive"
                  style={{ width: "100%" }}
                  alt="Image"
                />
              </div>
              <div className="panel-footer">
                Buy 50 mobiles and get a gift card
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            return (
              <div className="col-sm-4" >
                <div className="panel panel-primary" style={{ width: "300px" }}>
                  <div className="panel-heading">{item.title}</div>
                  <div className="panel-body"> 
                
                <img 
                      src={
                        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                      }
                      className="img-responsive"
                      style={{ width: "100%"  }}
                      alt="Image"
                    />
                
                   
                  </div>
                  <div className="panel-footer">
                    <p>
                      <label>Price</label> : {item.price} {item.currencyId}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      {/* Mobile Category Field */}

      <div className="container" style={{ display: "flex" }}>
        <div className="col-sm-4">
          <div className="panel panel-danger" style={{ width: "300px" }}>
            <div className="panel-heading">BLACK FRIDAY DEAL</div>
            <div className="panel-body">
              <img
                src={
                  "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                }
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
            <div className="panel-footer">
              Buy 50 mobiles and get a gift card
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            if(item.category=="Mobile"){
              return (
                <div className="col-sm-4">
                  <div className="panel panel-primary" style={{ width: "300px" }}>
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body">
                    <a href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails(products)}}>
                      <img
                        src={item.productImage}
                        className="img-responsive"
                        style={{ width: "100%" }}
                        alt="Image"
                      />
                      </a>
                    </div>
                    <div className="panel-footer">
                      <p>
                        <label>Price</label> : {item.price} {item.currencyId}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
           
          })}
        </div>
      </div>
      <br />

      {/* EarPhone Category Field */}

      <div className="container" style={{ display: "flex" }}>
        <div>
          <div className="col-sm-4">
            <div className="panel panel-danger" style={{ width: "300px" }}>
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img
                  src={
                    "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                  }
                  className="img-responsive"
                  style={{ width: "100%" }}
                  alt="Image"
                />
              </div>
              <div className="panel-footer">
                Buy 50 mobiles and get a gift card
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            if(item.category=="EarPhone"){
              return (
                <div className="col-sm-4">
                  <div className="panel panel-primary" style={{ width: "300px" }}>
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body">
                    <a href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails()}}>
                        <img
                          src={item.productImage}
                          className="img-responsive"
                          style={{ width: "100%" }}
                          alt="Image"
                        />
                        </a>
                    </div>
                    <div className="panel-footer">
                      <p>
                        <label>Price</label> : {item.price} {item.currencyId}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
           
          })}
        </div>
      </div>
      <br />

      {/*  Laptop Category Field */}

      <div className="container" style={{ display: "flex" }}>
        <div className="col-sm-4">
          <div className="panel panel-danger" style={{ width: "300px" }}>
            <div className="panel-heading">BLACK FRIDAY DEAL</div>
            <div className="panel-body">
              <img
                src={
                  "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                }
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
            <div className="panel-footer">
              Buy 50 mobiles and get a gift card
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            if(item.category=="Laptop"){
              return (
                <div className="col-sm-4">
                  <div className="panel panel-primary" style={{ width: "300px" }}>
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body">
                    <a href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails()}}>
                        <img
                          src={item.productImage}
                          className="img-responsive"
                          style={{ width: "100%" }}
                          alt="Image"
                        />
                        </a>
                    </div>
                    <div className="panel-footer">
                      <p>
                        <label>Price</label> : {item.price} {item.currencyId}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          
          })}
        </div>
      </div>
      <br />

      {/*  Bluthooth Category Field */}

      <div className="container" style={{ display: "flex" }}>
        <div>
          <div className="col-sm-4">
            <div className="panel panel-danger" style={{ width: "300px" }}>
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img
                  src={
                    "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                  }
                  className="img-responsive"
                  style={{ width: "100%" }}
                  alt="Image"
                />
              </div>
              <div className="panel-footer">
                Buy 50 mobiles and get a gift card
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            return (
              <div className="col-sm-4">
                <div className="panel panel-primary" style={{ width: "300px" }}>
                  <div className="panel-heading">{item.title}</div>
                  <div className="panel-body">
                    <img
                      src={
                        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                      }
                      className="img-responsive"
                      style={{ width: "100%" }}
                      alt="Image"
                    />
                  </div>
                  <div className="panel-footer">
                    <p>
                      <label>Price</label> : {item.price} {item.currencyId}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      {/*  Mouse Category Field */}

      <div className="container" style={{ display: "flex" }}>
        <div className="col-sm-4">
          <div className="panel panel-danger" style={{ width: "300px" }}>
            <div className="panel-heading">BLACK FRIDAY DEAL</div>
            <div className="panel-body">
              <img
                src={
                  "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                }
                className="img-responsive"
                style={{ width: "100%" }}
                alt="Image"
              />
            </div>
            <div className="panel-footer">
              Buy 50 mobiles and get a gift card
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ minWidth: "110px", display: "flex", overflowX: "auto" }}
        >
          {products.map((item, index) => {
            return (
              <div className="col-sm-4">
                <div className="panel panel-primary" style={{ width: "300px" }}>
                  <div className="panel-heading">{item.title}</div>
                  <div className="panel-body">
                    <img
                      src={
                        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/project-5/12629.jpeg"
                      }
                      className="img-responsive"
                      style={{ width: "100%" }}
                      alt="Image"
                    />
                  </div>
                  <div className="panel-footer">
                    <p>
                      <label>Price</label> : {item.price} {item.currencyId}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />

      <footer className="container-fluid text-center">
        <p>Online Store Copyright</p>
        <form className="form-inline">
          Get deals:
          <input
            type="email"
            className="form-control"
            size="50"
            placeholder="Email Address"
          />
          <button type="button" className="btn btn-danger">
            Sign Up
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Home;
