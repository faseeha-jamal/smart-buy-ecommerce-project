import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { create } from "../Appprovider";

export default function Login() {
  let detail=useContext(create)
  const {user}=detail
   const iVal={
    email:"",
    password:""
   }
  
   const [formV,setForm]= useState(iVal)
   const [formError,setFormerror]=useState({})
   const [submit,setSubmit]=useState(false)

  const handleChange=(c)=>{
   const {name,value}= c.target
   setForm({...formV,[name]:value})
 }
    // console.log(formV);
    const handlebutton=(e)=>{
      e.preventDefault()
      setFormerror(vali(formV))
      setSubmit(true)
    }
    useEffect(()=>{
     if(Object.keys(formError).length === 0 && submit){
      if(user.email !== formV.email){
        setFormerror({...formError,email:"Email not registred"})
      }
      if(user.password !== formV.password){
        setFormerror({...formError,password:"Password not match"})
      }
      if(user.email===formV.email && user.password===formV.password){
          alert("WELCOME SMART BUY")
      }
     }
    },[formError])

    const vali=(values)=>{
      let onlyerror={}
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


      if(!values.email){
        onlyerror.email="Email reqiuered"
      }else if(!regex.test(values.email)){
        onlyerror.email="Email not valid"
      }
      if(!values.password){
        onlyerror.password="Password reqired"
      }
      return onlyerror
    }
    // console.log(formError);
    // console.log(formV);

  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-col items-center justify-center gap-10 w-[500px]  h-[500px] border border-slate-300 ">
        <h1 className="text-3xl">Welcome</h1>
        <h1 className="text-center text-3xl">Login</h1>
        <form onSubmit={handlebutton}>
          <div>
            <input type="email"
             placeholder="Email"
             name="email"
             value={formV.email}
             onChange={handleChange}/>
            <i class="fa-regular fa-envelope"></i>
            <p className="text-red-600" >{formError.email}</p>
          </div>
          
          <div className="">
            <input type="password"
            placeholder="Password"
            name="password" 
            value={formV.password}
            onChange={handleChange}/>
            <i class="fa-regular fa-eye-slash"></i>
            <p className="text-red-600">{formError.password}</p>
          </div>
        
        <button className="bg-cyan-500 rounded-xl w-64 p-3 mt-10">Login</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/sign">
          <span className="text-cyan-500">Signup</span>
          </Link>
        </p>
      </div>
    
    </div>
  );
}
