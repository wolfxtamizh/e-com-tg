import './App.css';
import Navbar from './Components/Navbar/Navabar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCatageory from './Pages/ShopCatageory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LogginSignup from './Pages/LogginSignup';
import Footer from './Components/Footer/Footer';
import banner_mens from "./Components/Assests/banner_mens.png";
import banner_women from "./Components/Assests/banner_women.png";
import banner_kids from "./Components/Assests/banner_kids.png";
import BillingDetails from './Pages/BillingDetails';
import GreetingMsg from './Pages/GreetingMsg';

function App(props) {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCatageory banner={banner_mens} catageory="men"/>}></Route>
        <Route path='/womens' element={<ShopCatageory  banner={banner_women} catageory="women"/>}></Route>
        <Route path='/kids' element={<ShopCatageory banner={banner_kids} catageory="kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LogginSignup/>}></Route>
        <Route path='/billing' element={<BillingDetails/>}></Route>
        <Route path='/greeting' element={<GreetingMsg/>}></Route>
      </Routes>

      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
