import React, { useContext, useEffect, useState } from 'react'
import { create } from '../Appprovider'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
  const detaile=useContext(create)
  let nav =useNavigate()
  const {setUser}=detaile

    const iVal={
        username:"",
        email:"",
        password:""
    }
    const [formV,setForm]=useState(iVal)
    const [formError,setFormerror]=useState({})
    const [submit,setSubmit]=useState(false)
   
     
    const handlechange=(e)=>{
        const{name,value}=e.target
        setForm({...formV,[name]:value})
    }
    // console.log(formV);
    const handlebutton=(e)=>{
      e.preventDefault()
      setFormerror(vali(formV))
      setSubmit(true)
    }

    useEffect(()=>{
      if(Object.keys(formError).length===0 && submit){
        // console.log("helo");
        setUser(formV)
        nav("/log")
      }
    },[formError])
    // console.log(user)

    const vali=(value)=>{
    const erronly={}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!value.username){
      erronly.username="Username  requiered"
    }
    if(!value.email){
      erronly.email="Email requiered"
    }else if(!regex.test(value.email)){
      erronly.email="Email not valid"
    }
    if(!value.password){
      erronly.password="Password requiered"
    }
    return erronly
    }
    //  console.log(formV);
  return (
    <div className="flex justify-center my-10">
    <div className="flex flex-col items-center justify-center gap-10 w-[500px]  h-[500px] border border-slate-300 ">
     <h1 className='text-3xl'>Create Account</h1>
      <h1 className="text-center text-3xl">Sign up</h1>
      <form onSubmit={handlebutton}>
        <div>
        <input type="text"
         placeholder='User name'
         name='username'
         value={formV.username}
         onChange={handlechange} />
        <i class="fa-regular fa-user"></i>
        </div>
        <p>{formError.username}</p>
        <div>
          <input type="email"
           placeholder="Email"
           name="email"
           value={formV.email}
           onChange={handlechange}/>
          <i class="fa-regular fa-envelope"></i>
        </div>
        <p>{formError.email}</p>
        <div>
          <input type="password"
          placeholder="Password"
          name='password'
          value={formV.password}
          onChange={handlechange} />
          <i class="fa-regular fa-eye-slash"></i>
        </div>
        <p>{formError.password}</p>
        <button className="bg-cyan-500 rounded-xl w-64 p-3">Sign up</button>
      </form>
    </div>
  
  </div>
  )
}
