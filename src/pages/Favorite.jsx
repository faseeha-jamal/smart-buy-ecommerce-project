import React, { useContext } from 'react'
import { create } from '../Appprovider'

export default function Favorite() {
    const val = useContext(create)
    const{state}=val
 
    const newval = state.filter((obj)=>{
        return obj.fav === true
    })

  return (
    <div>
     {newval.map((obj)=>(
       <div className="w-[70%] mx-auto">
       <div className="flex mt-10 border border-black[100] justify-around ">
         <img
           src={obj.thumbnail}
           className="w-[250px] h-[200px] m-8 border border-black-[100]"
           alt=""
         />
         <div className="w-[600px]">
           <p className="text-gray-400 capitalize">category-{obj.category}</p>
           <h1 className="text-3xl font-serif m-3 "> {obj.title} </h1>
           <p className="text-2xl mt-8">
             ${obj.price}{" "}
             <span className="text-slate-600 text-lg m-2">
               <strike>
                 ${(obj.price * obj.discountPercentage) / 100 + obj.price}
               </strike>
             </span>{" "}
             <span className=" text-cyan-500 text-base">
               {obj.discountPercentage}% off
             </span>
           </p>
           <h1 className="capitalize text-xl mt-5">product details:</h1>
           <p className="text-gray-400">{obj.description} </p>
         </div>
       </div>
     </div>
     ))} 
    </div>
  )
}
