import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Your email");
  const [password, setPassword] = useState("");

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
          token: res.access_token,
        })
        .then((res) => {
          if (res.data.message === "User created") {
            toast.success("Your account is created. Now you can log in via Google.");
          } else {
            localStorage.setItem("token", res.data.token);
            toast.success("Login successful!");
            navigate("/");
            window.location.reload(); // Reload page to update header
          }
        });
    },
  });

  function login(){
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
      email : email,
      password : password
    }).then(
      (res)=>{
        
        if(res.data.user==null){
          toast.error(res.data.message)
          return
        }
        toast.success("Login success")
        localStorage.setItem("token",res.data.token)
        if(res.data.user.type == "admin"){
          window.location.href = "/admin"
        }else{
          window.location.href = "/"
        }
      }
    )
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-900">
      <div className="w-[400px] h-[450px] bg-blue-600 flex flex-col items-center justify-center">
        <img src="/logo.png" className="rounded-full w-[100px]" />
        <span>Email</span>
        <input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Password</span>
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-white m-2" onClick={login}>
          Login
        </button>
        <button
          onClick={() => {
            googleLogin();
          }}
          className="text-yellow-500 bg-white"
        >
          Google Login
        </button>
      </div>
    </div>
  );
}
