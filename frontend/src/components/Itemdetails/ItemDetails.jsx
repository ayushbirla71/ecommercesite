import React, { useState } from "react";
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
  // let [Specifications, setProductSpecifications] = useState();

  if (token === 0) {
    setToken(localStorage.getItem("Token"));
    setUserId(localStorage.getItem("UserId"));
  }

  console.log(category);

  if (productDetails === 0) {
    let Obj = {
      method: "get",
      url: `/products/${productId}`,
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }

  if (products.length === 0) {
    let Obj = {
      method: "get",
      params: { category: category },
      url: `/products`,
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
        url: `/users/${userId}/cart`,
      };
      fetchDataFromApi(Obj)
        .then((res) => {
          console.log(res);
          alert("add successfully");
        })
        .catch((err) => {
          navigate("/login");
        });
    } else {
      navigate("/login");
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
                {productDetails?
                productDetails.productImageList.map((item, index) => {
                      return (
                        <li data-image={item}>
                          <img
                            src={item}
                            alt=""
                          />
                        </li>
                      );
                    }):''
                  }
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
                  {productDetails ? productDetails.title : ""}
                </div>
                <div className="product-rating">
                  <span className="badge badge-success">
                    <i className="fa fa-star"></i> 4.5 Star
                  </span>{" "}
                  <span className="rating-review">
                    {" "}
                    {productDetails ? productDetails.ratings : ""} Ratings &{" "}
                    {productDetails ? productDetails.reviews : ""} Reviews
                  </span>
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
                    Warranty: {productDetails ? productDetails.warranty : ""}
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
                    In Stock:{" "}
                    {productDetails
                      ? productDetails.quantity
                      : " 25 units sold this week"}
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
                      {productDetails.ram
                        ? productDetails.ram.map((item, index) => {
                            return (
                              <>
                                <button className="btn btn-primary btn-sm">
                                  {item} GB
                                </button>{" "}
                              </>
                            );
                          })
                        : ""}
                    </div>
                    <div className="col-xs-6" style={{ marginLeft: "55px" }}>
                      {" "}
                      <span className="product_options">Storage Options</span>
                      <br />{" "}
                      {productDetails.ram
                        ? productDetails.InternlStorage.map((item, index) => {
                            return (
                              <>
                                <button className="btn btn-primary btn-sm">
                                  {item} GB
                                </button>{" "}
                              </>
                            );
                          })
                        : ""}
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
                          <i className="fas fa-chevron-down" ></i>
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
          

            <div
              className="row" id="productsList"
              style={{ minWidth: "110px", display: "flex", overflowX: "auto" ,}}
            >
              {products.map((item, index) => {
                return (
                  // <div className="col-sm-4">
                  //   <div
                  //     className="panel panel-primary"
                  //     style={{ width: "300px", height: "285px" }}
                  //   >
                  //     <div className="panel-heading">{item.title}</div>
                  //     <div className="panel-body">
                  //       <a
                  //         href={`/productDetails/${item._id}/${item.category}`}
                  //       >
                  //         <img
                  //           src={item.productImage}
                  //           className="img-responsive"
                  //           style={{ height: "100%", width: "100%" }}
                  //           alt="Image"
                  //         />
                  //       </a>
                  //     </div>
                  //     <div className="panel-footer">
                  //       <p>
                  //         <label>Price</label> : {item.price} {item.currencyId}
                  //       </p>
                  //     </div>
                  //   </div>
                  // </div>
                  <div className="col-sm-4"style={{marginTop:"10px"}} >
                  <div className="panel panel-primary" >
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body" style={{display:'flex', justifyContent:"center"}}>
                    <a className="product" href={`/productDetails/${item._id}/${item.category}`}>
                      <img
                        src={item.productImage}
                        className="img-responsive"
                        style={{ width: "100%",height:"100%" }}
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
                      <span className="p_specification">Front Camera :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          {productDetails ? productDetails.frontcam : ""}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Back Camera :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          {productDetails ? productDetails.backcam : ""}
                        </li>
                      </ul>
                    </td>
                  </tr>
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
                        <li>
                          {productDetails ? productDetails.moduleNumber : ""}
                        </li>
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
                        <li>{productDetails ? productDetails.color : ""}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Suitable for :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          {productDetails ? productDetails.suitablelity : ""}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Processor :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>
                          {productDetails ? productDetails.processer : ""}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Brand :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>{productDetails ? productDetails.brand : ""}</li>
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
