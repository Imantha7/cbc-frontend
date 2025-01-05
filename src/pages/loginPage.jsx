import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {

    const [email, setEmail] = useState("Your email")
    const [password, setPassword] = useState();

    function Login(){
        axios.post("http://localhost:5000/api/users/login", {
            email : email,
            password : password
        }).then((res)=>{
            console.log(res)
            if(res.data.user == null){
                toast.error(res.data.message)
                return
            }
            toast.success(res.data.message)
            localStorage.setItem("token",res.data.token)
            if(res.data.user.type == "admin"){
                window.location.href = "/admin"
            }
        })
    }

  return (
    <div className="w-full h-screen flex
    justify-center items-center bg-red-900">
        <div className="w-[400px] h-[450px]
        bg-blue-600 flex flex-col items-center justify-center">

            <img src="/logo.jpg" className="rounded-full w-[100px]"/>
            <span>Email</span>
            <input defaultValue={email} onChange={(e)=>{ 
                 setEmail(e.target.value) 
            }}/>
            <span>Password</span>
            <input type="password" defaultValue={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>

            <button className="bg-white m-2"
            onClick={Login}>Login</button>

        </div>
    </div>
  )
}
