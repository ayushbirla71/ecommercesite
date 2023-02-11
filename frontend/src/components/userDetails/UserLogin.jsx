import React, { useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import "./userLogin.css";
import {useNavigate} from "react-router-dom";
import Header from "../header/Header";

const UserLogin = () => {
    let [userData,setUserData]=useState();
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    let navigate = useNavigate();
    

    let login=()=> {

        let Obj={
            method:"post",
            url:`http://localhost:3001/login`,
            data:{
                email:email,
                password:password
            }
        }

        fetchDataFromApi(Obj).then((res) => {
          console.log(res);
          setUserData(res);
        });

        
    }
    if(userData){
        localStorage.setItem('Token', userData.token );
        localStorage.setItem('UserId', userData.userId );
        localStorage.setItem('ProfileUrl', userData.profileUrl );
        
        navigate("/home") 
    }



  return (
    <div className="fullbody">
        <Header/>
      <div className="login-container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                onChange={(e)=>{setEmail(e.target.value)}}
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                onChange={(e)=>{setPassword(e.target.value)}}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button onClick={()=>{login();}} className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in my site</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
