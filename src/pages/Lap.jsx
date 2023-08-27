import React, { useContext } from 'react'
import { create } from '../Appprovider'
import { useNavigate } from 'react-router-dom'

export default function Lap() {
  const val=useContext(create)
  const {state}=val
  const newval=state.filter((obj)=>{
    return obj.category === "laptops"
  })
  const nav=useNavigate()
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center w-[100vw] h-[100vh]">
    {newval.map((obj)=>(
           <div className="border border-black-[100]" onClick={()=>nav('/nav',{state:obj})}>
           <div className="w-80 h-[450px] ">
             <p className="bg-cyan-500  text-center p-1"> Discount{obj.discountPercentage}%</p>
             <img
               src={obj.thumbnail}
               className="w-[250px] h-[200px] m-8 borderborder border-black-[500]"
               alt=""
             />
             <div className="m-8  font-serif">
               <h1 className="text-lg font-bold "> {obj.title}</h1>
               <h3 className='text-lg text-slate-900'>Brand:{obj.brand}</h3>
               <p className="flex justify-center gap-2 bg-cyan-500 w-20 p-1 rounded-3xl mt-2">
                 {" "}
                 {obj.rating}{" "}
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   class="w-4 h-4 text-white mt-1"
                 >
                   <path
                     fill-rule="evenodd"
                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                     clip-rule="evenodd"
                   />
                 </svg>
               </p>

             </div>
           </div>
         </div>
    ))}
 </div>
  )
}

