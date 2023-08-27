import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const create = createContext();
export default function Appprovider({ children }) {
  const [state, setState] = useState([]);
  console.log(state);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((content) => {
      // console.log(content.data.products);
      let data = content.data.products
      for(let i of data){
        i.fav=false
        }
      setState(data);
      // console.log(content);
    });
  }, []);

    
  //  console.log(state);

  const [cart, setCart] = useState([]);
  // console.log(cart);
  const addToCart =((ca) => {
    // console.log("ca"+ca.id);
    if(cart.length>0){
      // let flag=true
    let fine = cart.find((obj)=>{
        return obj.id === ca.id       
      })
      if(fine === undefined){
        setCart([...cart,ca])
       }
    }else{
      setCart([...cart, ca]);
    }
   
    
  });
  // console.log(cart);
  
   const removeCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    };


    const addFave = (cid)=>{
      // console.log(cid);
      setState(
        state.map((obj)=>{
          if(obj.id==cid){
            // console.log(obj.id);
            // console.log("true working");
            if(obj.fav){
              return {...obj, fav:false}
            }else{
              return {...obj, fav:true}
            }
            // return {...obj,fav: true}   
          }else{
            return obj
          }
        })
      )
      
    }
    
    const [user,setUser]=useState({})
  
  return (
    <create.Provider value={{ state, addToCart,cart,removeCart, addFave,user,setUser }}>{children}</create.Provider>
  );
}
