import React, { useState } from 'react'
import { fetchDataFromApi } from '../../utils/api';
import Header from '../header/Header';
import ItemDetails from '../Itemdetails/ItemDetails';


const Product =() => {
  let [productsList, setproductslist] = useState([]);

  if (productsList.length == 0) {
    let Obj={
      method:"get",
      url:`http://localhost:3001/products`,
  }
    fetchDataFromApi(Obj).then((res) => {
      console.log(res);
      setproductslist(res);
    });
  }

  return (
    <div>
      <Header/>
      <div className="container" style={{ display: "flex" }}>

        <div
          className="row"
          style={{ minWidth: "110px", }}
        >
          {productsList.map((item, index) => {
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
            
          
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
