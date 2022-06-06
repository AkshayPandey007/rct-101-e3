import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const[loginCreds,setLoginCreds]=useState({})
  const {login}=useContext(AuthContext)
  const handleChange=(e)=>{
    const{name,value}=e.target
    setLoginCreds({...loginCreds,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // login()
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <input data-cy="login-email" placeholder="Enter Email..." type="email" onChange={handleChange}/>
      <input data-cy="login-password" placeholder="Enter Pass..." type="password" onChange={handleChange}/>
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
