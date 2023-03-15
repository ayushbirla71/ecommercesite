import React, { useState } from "react";
import { fetchDataFromApi } from '../../utils/api';
import Header from '../header/Header';
import { useParams } from "react-router-dom";

const OrderLists = () => {

    let [userId, setUserId] = useState();
    let [token, setToken] = useState(0);
    let [items, setItemsList] = useState([]);
    let [orderId, setOrderID] = useState();


    if (token === 0) {
        setToken(localStorage.getItem("Token"));
        setUserId(localStorage.getItem("UserId"));
      }

     if(items.length==0){

        let Obj = {
          method: "get",
    
          headers: { Authorization: `Bearer ${token}` },
          url: `/users/${userId}/getOrders`,
        };
        fetchDataFromApi(Obj).then((res) => {
          console.log(res[0]._id);
           setOrderID(res[0]._id);
          setItemsList(res[0].items);
          
        });
    }

    let UpdateOrderStatus = (Id) => {
      let Obj = {
        method: "put",
  
        headers: { Authorization: `Bearer ${token}` },
        url: `/users/${userId}/orders`,
        data: {
          orderId:orderId,
          itmeId: Id,
          status:"cancelled"
        },
      };
      fetchDataFromApi(Obj).then((res) => {
        console.log(res);
        window.location.reload();
      });
    };


  return (
    <div>
     <div className="header-fixed" style={{position:"fixed"}}>

<Header/>
</div>
        <section className="" style={{width:"100%", justifyContent:"center", display:"flex", height:"100%", marginTop:"5%"}}>
  <div className="" style={{height:"100%", width:"80%", backgroundColor:"white", justifyItems:"center"}}>
    <div className="row" style={{border:"solid", width:"100%", padding:"2%"}}>
      <div className="">
        <div className="" >
          <div className="card-header px-4 py-5" style={{textAlign:"center", margin:"5%"}}>
            <h2 className="text-muted mb-0">All Order List</h2>
          </div>
          <div className="card-body p-4">
            {items?(items.map((item,key)=>{
                let val='50%'
                let color='#a8729a'
                let disp='none'
                if(item.status=="cancelled"){
                    val='100%'
                    color='red'

                }
                else if(item.status=='completed'){
                    val='100%';
                    color="green"
                }
                else{
                    if(item.productId.cancellable==true){
                        disp='block'
                    }
                }
                return (
                    <>
                    <div className="card shadow-0 border mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-2" >
                            <img src={item.productId.productImage?item.productId.productImage:""}
                              className="img-fluid" alt="Phone" style={{height:"50px", margin:"1px"}}/>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0">{item?item.productId.title:""}</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small"> {item?item.productId.color:""}</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Qty: {item?item.quantity:""}</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">₹  {item?item.productId.price*item.quantity:""}</p>
                          </div>
                        </div>
                        <hr className="mb-4" style={{backgroundColor:"#e0e0e0"}}/>
                        <div className="row" style={{display:"flex"}}>
                          <div className="col-md-2">
                            <p className="text-muted mb-0 small">Track Order</p>
                          </div>
                          <div className="col-md-10">
                            <div className="progress" style={{height: "6px", borderRadius: "16px"}}>
                              <div className="progress-bar" role="progressbar"
                                style={{width: `${val}`, borderRadius: "16px", backgroundColor: `${color}`}} aria-valuenow="65"
                                aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between",}}>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">{item?item.status:""}</p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button  type="button"
                        className="btn btn-primary btn-lg btn-block" style={{display:`${disp}`}} onClick={()=>{UpdateOrderStatus(item._id)}} > Cancel</button>
                    </div>
                    <hr className="mb-4" style={{backgroundColor:"black" , height:"1px"}}/>
                    </>

                )
            })):''}

            {/* <div className="card shadow-0 border mb-4">
              <div className="card-body">
                    {items?(
                        items.map((item,index)=>{
                            return (
                                <div>

                        <div className="row">
                          <div className="col-md-2" >
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                              className="img-fluid" alt="Phone" style={{height:"50px", borderRadius:"50%"}}/>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0">Samsung Galaxy</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">White</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Capacity: 64GB</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">Qty: 1</p>
                          </div>
                          <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                            <p className="text-muted mb-0 small">$499</p>
                          </div>
                        </div>
                        <hr className="mb-4" style={{backgroundColor:"#e0e0e0"}}/>


                <div className="row" style={{display:"flex"}}>
                  <div className="col-md-2">
                    <p className="text-muted mb-0 small">Track Order</p>
                  </div>
                  <div className="col-md-10">
                    <div className="progress" style={{height: "6px", borderRadius: "16px"}}>
                      <div className="progress-bar" role="progressbar"
                        style={{width: "65%", borderRadius: "16px", backgroundColor: "#a8729a"}} aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between",}}>
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>
                      <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                    </div>
                  </div>
                </div>
                        </div>
                            )
                        })
                           
                    ):""}


              </div>
            </div> */}


         
          </div>
         
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default OrderLists
