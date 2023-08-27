import React,{Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom'
import img1 from "../assets/phone.avif"
import img2 from "../assets/groceries.webp"
import img3 from "../assets/homedecore.jpg"
import img4 from "../assets/perfume.webp"
import img5 from "../assets/makeup.avif"
import img6 from "../assets/all.jpg"
import img7 from "../assets/lap.jpg"

import Phone from "./Phone";
import Homedecor from "./Homedecor";
import Groceries from "./Groceries";
import Mackup from "./Mackup";
import Perfume from "./Perfume";
import Allproducts from "./Allproducts";
import Detail from "./Detail";
import Lap from "./Lap";
import Cart from "./Cart";
import Favorite from "./Favorite"
import Login from "./Login";
import Signup from "./Signup";




export default function Nav() {
  return (
   <>
    <nav className="flex justify-around items-center h-36 w-[85vw]  m-auto border border-black-[100]">
      <Link to="/" className="flex flex-col items-center">
          <img src={img6} alt="" className="w-20 h-20 rounded-full"  />
          <p>Home</p>
        </Link>
         <Link to="/phone" className="flex flex-col items-center">
            <img src={img1} alt="" className="w-20 h-20 rounded-full" />
            <p>Mobile</p>
         </Link>
         <Link to="/lap">
          <img src={img7} alt="" className="w-20 h-20 rounded-full" />
          <p>Laptops</p>
        </Link>
         <Link to="/perfume" className="flex flex-col items-center">
         <img src={img4} alt="" className="w-20 h-20 rounded-full" />
         <p>Perfume</p>
         </Link>
        <Link to="/mackup" className="flex flex-col items-center">
        <img src={img5} alt="" className="w-20 h-20 rounded-full" />
         <p>Skincare</p>
        </Link>
        <Link to="/homedecor" className="flex flex-col items-center">
         <img src={img3} alt="" className="w-20 h-20 rounded-full" />
         <p>Home Decore</p>
         </Link>
        <Link to="/groceries" className="flex flex-col items-center">
         <img src={img2} alt="" className="w-20 h-20 rounded-full" />
         <p>Groceries</p>
         </Link>
        <Link to='nav'></Link>  
 
      </nav>
      <Routes>
       <Route path="/" element={<Allproducts/>} />
        <Route path="phone"  element={<Phone/>} />
        <Route path="groceries" element={<Groceries/>} />
        <Route path="perfume" element={<Perfume/>} />
        <Route path="mackup" element={<Mackup/>} />
        <Route path="homedecor" element={<Homedecor/>} /> 
        <Route path="nav" element={<Detail/>}/>
        <Route path="lap" element={<Lap/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="fav" element={<Favorite/>}/>
        <Route path="log" element={<Login/>}/>
        <Route path="sign" element={<Signup/>}/>
       </Routes>
      </>

  )
}
