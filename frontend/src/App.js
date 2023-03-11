import User from "./components/userDetails/User";
import UserLogin from "./components/userDetails/UserLogin";
import Home from "./home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDetails from "./components/Itemdetails/ItemDetails";
import Product from "./components/products/Product";
import CartDetails from "./components/cart/CartDetails";
import UserSingUp from "./components/userDetails/UserSingUp";
// import CartDetails from "./components/cart/CartDetails";
  


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<UserLogin/>}/>
      <Route path="/UserProfile" element={<User/>}/>
      <Route path="/productList" element={<Product/>}/>
      <Route path="/Cart" element={<CartDetails/>}/>
      <Route path="/register" element={<UserSingUp/>}/>
      <Route path='/productDetails/:productId/:category' element={<ItemDetails/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
