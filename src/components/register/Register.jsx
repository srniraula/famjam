import React from 'react'
import './register.css'
import { NavLink } from 'react-router-dom'

const Register =  () => {
   
    return (

        <>
        <div className = "container-fluid nav_bg ">
             <div className = "row">
              <div className = "col-12 mx-auto">
              <div className = "pt-4">Please fill the form below to register below.</div>
               <div className = "contain">
    <h2>Registration form</h2>
  <div class="form">
    <label for="">Name</label>
    <input type="text" placeholder="Enter your name" required /><br/>
     <label for="">Address</label>
    <input type="text" placeholder="Enter your address" required /> <br/>
    <label for="">Email</label>
    <input type="email" placeholder="Enter your e-mail" required /><br/> 
    <label for="">Password</label>
    <input type="password" className = "password" required placeholder="Enter your password" /><br/>
    <i class="far fa-eye" className = "icon"></i>
    
    <button type="button" className = "button"><NavLink to = "/submit" >Submit</NavLink></button>
  </div>
  </div>

          </div>
      
        </div>
      
      </div> 
        </>
    );
}
export default Register;