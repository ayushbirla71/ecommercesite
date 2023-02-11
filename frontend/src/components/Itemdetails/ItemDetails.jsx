import React, { useState, useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useParams, useNavigate } from "react-router-dom";

import "./itemDetails.css";
import Header from "../header/Header";

const ItemDetails = () => {
  let navigate = useNavigate();
  let [products, setproductlist] = useState([]);
  const { productId, category } = useParams();
  let [productDetails, setProductDetails] = useState(0);
  let [userId, setUserId] = useState();
  let [token, setToken] = useState(0);

  if (token == 0) {
    setToken(localStorage.getItem("Token"));
    setUserId(localStorage.getItem("UserId"));
  }

  console.log(category);

  if (productDetails == 0) {
    let Obj = {
      method: "get",
      url: `http://localhost:3001/products/${productId}`,
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }

  if (products.length == 0) {
    let Obj = {
      method: "get",
      params: { category: category },
      url: `http://localhost:3001/products`,
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setproductlist(res);
    });
  }

  let aadToCart = () => {
    if (token) {
      let Obj = {
        method: "post",
        data: {
          productId: productId,
        },
        headers: { Authorization: `Bearer ${token}` },
        url: `http://localhost:3001/users/${userId}/cart`,
      };
      fetchDataFromApi(Obj).then((res) => {
        console.log(res);
      });
    }
    else{
      navigate("/login")
    }
  };

  return (
    <div className="super_container">
      <Header />
      <div className="single_product">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#fff", padding: "11px" }}
        >
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"
                    alt=""
                  />
                </li>
                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg"
                    alt=""
                  />
                </li>
                <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg">
                  <img
                    src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="image_selected">
                <img
                  src={productDetails ? productDetails.productImage : ""}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 order-3">
              <div className="product_description">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Products</a>
                    </li>
                    <li className="breadcrumb-item active">Accessories</li>
                  </ol>
                </nav>
                <div className="product_name">
                  {productDetails ? productDetails.title : ""} <br />{" "}
                  {productDetails ? productDetails.description : ""}
                </div>
                <div className="product-rating">
                  <span className="badge badge-success">
                    <i className="fa fa-star"></i> 4.5 Star
                  </span>{" "}
                  <span className="rating-review">35 Ratings & 45 Reviews</span>
                </div>
                <div>
                  {" "}
                  <span className="product_price">
                    {productDetails ? productDetails.price : ""}
                  </span>{" "}
                  <strike className="product_discount">
                    {" "}
                    <span style={{ color: "black" }}>₹ 2,000</span>{" "}
                  </strike>{" "}
                </div>
                <div>
                  {" "}
                  <span className="product_saved">You Saved:</span>{" "}
                  <span style={{ color: "black" }}>₹ 2,000</span>{" "}
                </div>
                <hr className="singleline" />
                <div>
                  {" "}
                  <span className="product_info">
                    EMI starts at ₹ 2,000. No Cost EMI Available
                  </span>
                  <br />{" "}
                  <span className="product_info">
                    Warranty: 6 months warranty
                  </span>{" "}
                  <br />{" "}
                  <span className="product_info">
                    7 Days easy return policy
                  </span>
                  <br />{" "}
                  <span className="product_info">
                    7 Days easy return policy
                  </span>
                  <br />{" "}
                  <span className="product_info">
                    In Stock: 25 units sold this week
                  </span>{" "}
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="br-dashed">
                        <div className="row">
                          <div className="col-md-3 col-xs-3">
                            {" "}
                            <img src="https://img.icons8.com/color/48/000000/price-tag.png" />{" "}
                          </div>
                          <div className="col-md-9 col-xs-9">
                            <div className="pr-info">
                              {" "}
                              <span className="break-all">
                                Get 5% instant discount + 10X rewards @ RENTOPC
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7"> </div>
                  </div>
                  <div className="row" style={{ marginTop: "15px" }}>
                    <div className="col-xs-6" style={{ marginLeft: "15px" }}>
                      {" "}
                      <span className="product_options">RAM Options</span>
                      <br />{" "}
                      <button className="btn btn-primary btn-sm">
                        4 GB
                      </button>{" "}
                      <button className="btn btn-primary btn-sm">8 GB</button>{" "}
                      <button className="btn btn-primary btn-sm">16 GB</button>{" "}
                    </div>
                    <div className="col-xs-6" style={{ marginLeft: "55px" }}>
                      {" "}
                      <span className="product_options">Storage Options</span>
                      <br />{" "}
                      <button className="btn btn-primary btn-sm">
                        500 GB
                      </button>{" "}
                      <button className="btn btn-primary btn-sm">1 TB</button>{" "}
                    </div>
                  </div>
                </div>
                <hr className="singleline" />
                <div className="order_info d-flex flex-row">
                  <form action="#" />
                </div>
                <div className="row">
                  <div className="col-xs-6" style={{ marginLeft: "13px" }}>
                    <div className="product_quantity">
                      {" "}
                      <span>QTY: </span>{" "}
                      <input
                        id="quantity_input"
                        type="text"
                        pattern="[0-9]*"
                        value="1"
                      />
                      <div className="quantity_buttons">
                        <div
                          id="quantity_inc_button"
                          className="quantity_inc quantity_control"
                        >
                          <i className="fas fa-chevron-up"></i>
                        </div>
                        <div
                          id="quantity_dec_button"
                          className="quantity_dec quantity_control"
                        >
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-primary shop-button"
                      onClick={() => {
                        aadToCart();
                      }}
                    >
                      Add to Cart
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-success shop-button"
                    >
                      Buy Now
                    </button>
                    <div className="product_fav">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-underline">
            <div className="col-md-6">
              {" "}
              <span className=" deal-text">Combo Offers</span>{" "}
            </div>
            <div className="col-md-6">
              {" "}
              <a href="#" data-abc="true">
                {" "}
                <span className="ml-auto view-all"></span>{" "}
              </a>{" "}
            </div>
          </div>

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
                    <div
                      className="panel panel-primary"
                      style={{ width: "300px" }}
                    >
                      <div className="panel-heading">{item.title}</div>
                      <div className="panel-body">
                        <a
                          href={`/productDetails/${item._id}/${item.category}`}
                        >
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
              })}
            </div>
          </div>
          <div className="row row-underline">
            <div className="col-md-6">
              {" "}
              <span className=" deal-text">Specifications</span>{" "}
            </div>
            <div className="col-md-6">
              {" "}
              <a href="#" data-abc="true">
                {" "}
                <span className="ml-auto view-all"></span>{" "}
              </a>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="col-md-12">
                <tbody>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Sales Package :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          2 in 1 Laptop, Power Adaptor, Active Stylus Pen, User
                          Guide, Warranty Documents
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Model Number :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li> 14-dh0107TU </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Part Number :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>7AL87PA</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Color :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Black</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Suitable for :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Processing & Multitasking</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Processor Brand :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>Intel</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
