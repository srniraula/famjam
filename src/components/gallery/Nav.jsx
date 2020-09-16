import React  from 'react'
import {NavLink} from 'react-router-dom'
import nnature from '../images/naturelover.jpg'
import nature from '../images/nature.jpg'
import nature4 from '../images/nnature4.jpg'

const Nav = () => {
    return (
        <div className = "container-fluid nav_bg gallery-inside ">
       <div className = "row">
<div className = " main-nav col-11 mx-auto d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-around d-sm-flex justify-content-sm-around align-items-sm-center flex-sm-column d-flex justify-content-around align-items-center flex-column pt-5">


          <div className = "sub-main  pr-3  d-flex flex-column align-items-center">
            <h3>Gallery1</h3>
          <div >
              <img src = {nnature} className = "img-fluid rounded-g" alt  = "Sorry not available"/>
          </div>
           <NavLink to = "/gallery1"> click here to go to gallery1</NavLink>
           
           </div>
          <div className = "sub-main  pr-3 d-flex flex-column align-items-center"> 
          <h3>Gallery2</h3>
          <div >
          <img src = {nature}  className = "img-fluid rounded-g"alt  = "Sorry not available"/>

          </div>
          <NavLink to = "/gallery2"> click here to go to gallery2</NavLink>
             
          </div>
          <div className = "sub-main pr-3 d-flex flex-column align-items-center">
          <h3>Gallery3</h3>
          <div >
          <img src = {nature4} className = "img-fluid rounded-g" alt  = "Sorry not available"/>

          </div>
           <NavLink to = "/gallery3"> click here to go to gallery3</NavLink>
           
           </div>
        
        


</div>

</div>

</div>


    );
}
export default Nav;


