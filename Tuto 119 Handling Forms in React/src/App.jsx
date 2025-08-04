import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'
import { stringify } from 'postcss';

function App() {
  
  const {
    register,
    handleSubmit,
    setError,
    
    formState: { errors , isSubmitting },
  } = useForm();

  const delay=(d)=>{
    return new Promise((res,rej)=>{
      setTimeout(() => {
        res()
      }, d*1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2) //simulating network delay
    let r= await fetch("http://localhost:3000/",{method:"POST",  headers: {
      "Content-Type": "application/json", 
    },body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    
    // if(data.username !== "Saksham"){
    //   setError("myform",{message:"Credentials are invalid."})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked",{message:"This user is blocked"})
    // }
  }

  return (
    <>
     <div className="container">
      {isSubmitting && <div className='loading'><div></div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Username' {...register("username", { required: true, minLength:{value:5,message:"min lengeth is 5"},maxLength:{value:10,message:"max lengeth is 10"} })} type="text"  />
        {errors.username && <div className='red'>{errors.username.message}</div> } 
        <br />
        <input placeholder='Password' {...register("password", { required: {value:true,message:"This field required"}})}type="password"/>
        {errors.password && <div className='red'>{errors.password.message}</div> } 
        <br />
        <input disabled={isSubmitting} type="submit" value="submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div> }
        {errors.blocked && <div className='red'>{errors.blocked.message}</div> }
      </form>
     </div>
    </>
  )
}

export default App
