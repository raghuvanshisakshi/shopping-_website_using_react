// import React,{useRef} from'react';
import React,{useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../Assets/logo1.png';
import cart from '../Assets/cart_img.png';


const Navbar = () => {
  // const myRef = useRef(null);
    const [menu,setMenu] = useState("Shop");
  return (
    <div className  = 'navbar'>
        <div className = "nav-logo">
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
      <ul className = "nav-menu">
        <li onClick= {()=>{setMenu("shop")}}><Link style = {{textDecoration:'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("mens")}}><Link style = {{textDecoration:'none'}} to = '/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("womens")}}><Link style = {{textDecoration:'none'}} to = '/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("Kids")}}><Link style = {{textDecoration:'none'}} to = '/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className  = "nav-login-cart">
        <Link to ='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart} alt=""/></Link>
        <div className  = "nav-cart-count">0</div>

{/* <ul className = "nav-menu">
        <li onClick= {()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className  = "nav-login-cart">
       <button>Login</button>
        <img src={cart} alt=""/>
        <div className  = "nav-cart-count">0</div> */}

      </div>
    </div>
  )
}

export default Navbar
