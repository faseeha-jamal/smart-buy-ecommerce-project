import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { create } from "../Appprovider";

export default function Detail() {
  const location = useLocation();
  const [image, setImg] = useState(location.state.thumbnail);
 
  const val = useContext(create);
  console.log(val);
  const { addToCart, addFave,state } = val;
  // console.log("state");
 console.log(state);//[]

  let myObj;
  if(state != null){
    myObj = state.find((obj)=>{
      return obj.id === location.state.id
    })
  }

  console.log(myObj);
  if(myObj === undefined){
    myObj = ''
  }

  // const {favr, setFav} = useState(location.state.fav) 

  return (
    <div>
      <div className="flex justify-center mt-10 w-[100vw] h-[100vh]">
        <div className=" border border-black[100] w-[800px] h-[650px]">
          <div className="flex   p-10 gap-10 ">
            <div className="flex flex-col items-end gap-3  h-[400px] border border-black-500 rounded-2xl p-2 ">
              <div
                onClick={() => {
                  addFave(location.state.id);
                  // setFav(location.state.fav===true ? location.state.fav=false : location.state.fav=true )
                }}
              >
               {
                myObj.fav? <i class="fa-solid fa-heart text-cyan-500 text-3xl" ></i> : <i class="fa-regular fa-heart text-cyan-500 text-3xl"></i> 
               }
                 
              
                
              
              </div>

              <img src={image} alt="" className="w-[350px] h-[300px]" />
            </div>
            <div className="w-[500px]">
              <h1 className="text-4xl"> {location.state.title} </h1>
              <h3 className="text-lg text-slate-900 mt-3">
                Brand:{location.state.brand}
              </h3>
              <div className="flex justify-center gap-2  text-white bg-cyan-500 w-20 p-1 rounded-3xl mt-6">
                <p>{location.state.rating} </p>
                <i class="fa-solid fa-star text-white text-xl"></i>
              </div>
              <p className="text-2xl mt-8">
                ${location.state.price}{" "}
                <span className="text-slate-600 text-lg m-2">
                  <strike>
                    $
                    {(location.state.price *
                      location.state.discountPercentage) /
                      100 +
                      location.state.price}
                  </strike>
                </span>{" "}
                <span className=" text-cyan-500 text-base">
                  {location.state.discountPercentage}% off
                </span>
              </p>
              <h1 className="capitalize text-xl mt-8">product details:</h1>
              <p className="text-gray-400">{location.state.description} </p>

              <button
                onClick={() => addToCart(location.state)}
                className=" bg-cyan-500 p-3 w-48  text-white rounded-3xl mt-5"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="text-center flex  gap-3 justify-center items-center">
            <div className="flex ">
              {location.state.images.map((img) => (
                <img
                  src={img}
                  alt=""
                  className="w-20 h-20 border border-cyan-500 m-1"
                  onClick={() => setImg(img)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
