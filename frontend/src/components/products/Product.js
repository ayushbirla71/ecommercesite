import React, { useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Header from "../header/Header";
import ItemDetails from "../Itemdetails/ItemDetails";
import "./product.css";

const Product = () => {
  let [productsList, setproductslist] = useState([]);

  if (productsList.length === 0) {
    let Obj = {
      method: "get",
      url: `/products`,
    };
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setproductslist(res);
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          {productsList.map((item, index) => {
            return (
              <div className="col-sm-4" style={{ marginTop: "10px",textAlign:"center", display:'flex', justifyItems:"center" }}>
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
                    >
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

              // <div className="col-sm-4" style={{height:'100%', marginTop:'10px', textAlign:"center", display:'flex', justifyItems:"center"}} >
              //   <div className="panel panel-primary" style={{ width: "100%" , justifyContent:'center'}}>
              //     <div className="panel-heading">{item.title}</div>
              //     <div className="panel-body" style={{display:'flex',justifyContent:"center"}}>
              //     <a  href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails()}}>
              //         <img
              //           src={item.productImage}
              //           className="img-responsive"
              //           style={{ width: "100%" ,height:"100%"}}
              //           alt="Image"
              //         />
              //         </a>
              //     </div>
              //     <div className="panel-footer">
              //       <p>
              //         <label>Price</label> : {item.price} {item.currencyId}
              //       </p>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
