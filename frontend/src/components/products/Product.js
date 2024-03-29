import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";
import ItemDetails from "../Itemdetails/ItemDetails";
import "./product.css";

const Product = () => {
  let [productsList, setproductslist] = useState([]);

  useEffect(() => {
    let Obj = {
      method: "get",
      url: `/products`,
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setproductslist(res);
    });
  }, []);

  return (
    <div>
      <div className="header-fixed" style={{ position: "fixed" }}>
        <Header />
      </div>
      <div className="container" style={{ width: "100%" }}>
        <div>
          {productsList.map((item, index) => {
            return (
              <div
                key={index}
                className="col-sm-4"
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  justifyItems: "center",
                  marginLeft: "0%",
                  maxWidth: "300px",
                }}
              >
                <div className="panel panel-primary">
                  <div className="panel-heading">{item.title}</div>
                  <div
                    className="panel-body"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <a
                      className="product"
                      href={`productDetails/${item._id}/${item.category}`}
                      onClick={() => {
                        ItemDetails();
                      }}
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src={item.productImage}
                        className="img-responsive"
                        style={{
                          width: "100%",
                          height: "100%",
                          textAlign: "center",
                        }}
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
    </div>
  );
};

export default Product;
