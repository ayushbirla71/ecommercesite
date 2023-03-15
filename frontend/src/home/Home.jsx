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

  if (products.length === 0) {
    let Obj={
      method:"get",
      url:`/products`,
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
      <div className="header-fixed" style={{position:"fixed"}}>

      <Header/>
      </div>


      {/* Mobile Category Field */}

      <div className="container" style={{ display: "flex" , marginTop:"5%" ,marginLeft:"0%" }}>
        <div className="col-sm-4"  style={{margin:"5px"}}>
          <div className="panel panel-danger" style={{width:'250px'}}>
            <div className="panel-heading">BLACK FRIDAY DEAL</div>
            <div className="panel-body">
              <img
                src={
                  "https://i1.wp.com/www.dazzlingdailydeals.com/wp-content/uploads/2016/11/November-Unlocked.jpg?resize=763%2C931"
                }
                className="img-responsive"
                style={{ width: "100%" ,height:"100%"}}
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
          style={{ minWidth: "110px", display:"flex", overflowX: "scroll", msOverflowStyle:"none", overflowY:"hidden"}}
        >
          {
          products.map((item, index) => {
            if(item.category==="Mobile"){
              return (
                <div className="col-sm-4"style={{marginTop:"10px", marginRight:"0%"}} >
                  <div className="panel panel-primary" >
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body" style={{display:'flex',justifyContent:"center"}}>
                    <a className="product" href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails(products)}}>
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
            }
           
          })}
        </div>
      </div>
     

      {/*  Laptop Category Field */}

      <div className="container" style={{ display: "flex" , margin:"0%"}}>
        <div className="col-sm-4"  style={{margin:"5px"}}>
          <div className="panel panel-danger" style={{width:'250px'}}>
            <div className="panel-heading">BLACK FRIDAY DEAL</div>
            <div className="panel-body">
              <img
                src={
                  "https://i1.wp.com/www.dazzlingdailydeals.com/wp-content/uploads/2016/11/November-Unlocked.jpg?resize=763%2C931"
                }
                className="img-responsive"
                style={{ width: "100%" ,height:"100%"}}
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
          style={{ minWidth: "110px", display: "flex", overflowX: "auto",overflowY:"hidden" }}
        >
          {products.map((item, index) => {
            if(item.category==="Laptop"){
              return (
                <div className="col-sm-4"style={{marginTop:"10px"}} >
                  <div className="panel panel-primary" >
                    <div className="panel-heading">{item.title}</div>
                    <div className="panel-body" style={{display:'flex', justifyContent:"center"}}>
                    <a className="product" href={`productDetails/${item._id}/${item.category}`}  onClick={()=>{ItemDetails(products)}}>
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
            }
           
          })}
        </div>
      </div>
      <br />

      <footer className="container-fluid text-center">
        <p>Online Ecommerce Site</p>
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
