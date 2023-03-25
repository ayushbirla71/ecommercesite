import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
import "./payment.css";

// import { PaymentIcon } from 'react-native-payment-icons';

const Pyment = (PropsVal) => {
    let navigat=useNavigate();



    let OrderPlace = () => {
        if (PropsVal.items.length != 0) {
          let Obj = {
            method: "post",
    
            headers: { Authorization: `Bearer ${PropsVal.token}` },
            url: `/users/${PropsVal.userId}/orders`,
    
            data: {
              cartId: PropsVal.cartDetails._id,
            },
          };
          fetchDataFromApi(Obj).then((res) => {
            console.log(res);
            alert("order successful");
            navigat('/OrderList')
            

            window.location.reload();
          });
        } else {
          alert("cart is empty");
        }
      };
    

  return (
    <div className="container-fluid" >
        <div className="creditCardForm">
            <div className="heading">
                <h1>Confirm Purchase</h1>
            </div>
            <div className="payment">
                <form onSubmit={() => {
                            OrderPlace();
                          }}>
                    <div className="form-group owner">
                        <label htmlFor="owner">Owner</label>
                        <input required type="text" className="form-control" id="owner"
                         siez="17"
                         placeholder="Cardholder's Name"/>
                    </div>
                    <div className="form-group CVV">
                        <label htmlFor="cvv">CVV</label>
                        <input required type="password" className="form-control" id="cvv" placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minlength="3"
                                  maxlength="4"/>
                    </div>
                    <div className="form-group" id="card-number-field">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input required type="text" className="form-control" id="cardNumber"
                         siez="17"
                         placeholder="1234 5678 9012 3457"
                         minlength="19"
                         maxlength="19"/>
                    </div>
                    <div className="form-group" id="expiration-date">
                        <label>Expiration Date</label>
                        <select required>
                            <option value="01">January</option>
                            <option value="02">February </option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <select required>
                            <option value="16"> 2016</option>
                            <option value="17"> 2017</option>
                            <option value="18"> 2018</option>
                            <option value="19"> 2019</option>
                            <option value="20"> 2020</option>
                            <option value="21"> 2021</option>
                        </select>
                    </div>
                    <div className="form-group" id="credit_cards">
                       
                        <img src="https://www.idealshyambazar.com/wp-content/uploads/2020/06/06cd1a3c_rupay-logo.jpg" style={{height:"60px"}} id="amex"/>
                        <img src="https://cdn0.iconfinder.com/data/icons/major-credit-cards-colored/48/JD-14-512.png" style={{height:"60px"}} id="mastercard"/>
                        <img src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135018-mastercard_82253.png" style={{height:"60px"}} id="amex"/>
                    </div>
                    <div className="form-group" id="pay-now">
                        <button type="submit" className="btn btn-default" id="confirm-purchase"  >Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default Pyment
