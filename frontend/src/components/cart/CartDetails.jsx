import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";
import { useNavigate, useParams } from "react-router-dom";
import "./cart.css";
import Pyment from "../paymentPage/Pyment";

const CartDetails = () => {
  let [cartDetails, setcartDetails] = useState(0);
  let [userId, setUserId] = useState();
  let [token, setToken] = useState(0);
  let [items, setItemsList] = useState([]);
  let [products, setproductlist] = useState([]);
  const { productId, category } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let Obj = {
      method: "get",
      url: `/users/${userId}/cart`,
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(userId);
    fetchDataFromApi(Obj).then((res) => {
      console.log(res.items);
      setcartDetails(res);
      setItemsList(res.items);
    });

    let obj = {
      method: "get",
      params: { category: category },
      url: `/products`,
    };
    fetchDataFromApi(obj).then((res) => {
      console.log(res);
      setproductlist(res);
    });
  }, []);

  if (token === 0) {
    setToken(localStorage.getItem("Token"));
    setUserId(localStorage.getItem("UserId"));
  }

  let incressProductQuantity = (Id) => {
    let Obj = {
      method: "post",

      headers: { Authorization: `Bearer ${token}` },
      url: `/users/${userId}/cart`,

      data: {
        productId: Id,
        removeProduct: 1,
      },
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setcartDetails(res);
      setItemsList(res.items);
    });
  };

  let decressProductQuantity = (Id) => {
    let Obj = {
      method: "put",

      headers: { Authorization: `Bearer ${token}` },
      url: `/users/${userId}/cart`,

      data: {
        productId: Id,
        removeProduct: 1,
      },
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setcartDetails(res);
      setItemsList(res.items);
    });
  };

  function openForm() {
    if (items.length == 0) {
      alert("cart is empty");
    } else {
      document.getElementById("myForm").style.display = "block";
    }
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <div>
      <div className="header-fixed" style={{ position: "fixed" }}>
        <Header />
      </div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Shopping Cart</h2>
            </div>
            <div className="content">
              <div className="row">
                {/* Order Process */}
                <div
                  id="myForm"
                  className="form-popup"
                  style={{ position: "fixed", display: "none" }}
                >
                  <Pyment
                    token={token}
                    userId={userId}
                    cartDetails={cartDetails}
                    items={items}
                  />
                </div>

                {/* Cart Details  */}
                <div>
                  <div className="col-md-12 col-lg-8">
                    <div className="items">
                      {items.map((item, index) => {
                        return (
                          <div key={index} className="product">
                            <div className="row">
                              <div className="col-md-3">
                                <img
                                  className="img-fluid mx-auto d-block image"
                                  style={{ width: "100%", height: "100%" }}
                                  src={item ? item.productId.productImage : ""}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="info">
                                  <div className="row">
                                    <div className="col-md-5 product-name">
                                      <div className="product-name">
                                        <a href="#">Lorem Ipsum dolor</a>
                                        <div className="product-info">
                                          <div>
                                            Product Name{" "}
                                            <span className="value">
                                              {item ? item.productId.title : ""}
                                            </span>
                                          </div>
                                          <div>
                                            RAM:{" "}
                                            <span className="value">4GB</span>
                                          </div>
                                          <div>
                                            Memory:{" "}
                                            <span className="value">32GB</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 quantity">
                                      <label htmlFor="quantity">
                                        Quantity:
                                      </label>
                                      <div style={{ textAlign: "center" }}>
                                        <button
                                          onClick={() => {
                                            incressProductQuantity(
                                              item.productId._id
                                            );
                                          }}
                                        >
                                          {" "}
                                          +{" "}
                                        </button>
                                        <input
                                          id="quantity"
                                          type="number"
                                          value={item ? item.quantity : ""}
                                          className="form-control quantity-input"
                                        />
                                        <button
                                          onClick={() => {
                                            decressProductQuantity(
                                              item.productId._id
                                            );
                                          }}
                                        >
                                          {" "}
                                          -{" "}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-md-3 price">
                                      <span>
                                        ₹ {item ? item.productId.price : ""}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div className="summary">
                      <h3>Summary</h3>
                      <div className="summary-item">
                        <span className="text">Subtotal</span>
                        <span className="price">
                          ₹ {cartDetails ? cartDetails.totalPrice : ""}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Discount</span>
                        <span className="price">$0</span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Shipping</span>
                        <span className="price">$0</span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Total</span>
                        <span className="price">
                          ₹ {cartDetails ? cartDetails.totalPrice : ""}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        onClick={() => {
                          openForm();
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ display: "flex" }}></div>
          <div
            className="row"
            style={{
              minWidth: "110px",
              display: "flex",
              overflowX: "auto",
              paddingTop: "30px",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              overflowY: "hidden",
            }}
          >
            {products.map((item, index) => {
              return (
                <div key={index} className="col-sm-4">
                  <div
                    className="panel panel-primary"
                    style={{ width: "300px" }}
                  >
                    <div className="panel-heading">{item.title}</div>
                    <div
                      className="panel-body"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <a href={`/productDetails/${item._id}/${item.category}`}>
                        <img
                          src={item.productImage}
                          className="img-responsive"
                          style={{ width: "100%", height: "100%" }}
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
        </section>
      </main>

      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={() => {
          navigate("/Orderlist");
        }}
      >
        Check Order List
      </button>
    </div>
  );
};

export default CartDetails;
