import React from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import passwor_icon from '../Assets/password.png'
import { useState } from 'react'

const LoginSignUp = () => {
    const [action , setAction ] =useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action} </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div> }
           
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email ' />
            </div>
            <div className="input">
                <img src={passwor_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action === "Sign Up" ? <div> </div> :<div className="forget-password">Lost Password <span>Click Here!</span></div> }
        
        <div className="submit-container">
            <div style={{ color:"#fff" ,  background: "#4c00b4",
            }} className={action === "Login" ? "Submit gray" : "submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
            <div style={{color:"#676767" , background: "#eaeaea"}} className={action === "Sign Up " ? "submit gray " : "submit "} onClick={()=> {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp