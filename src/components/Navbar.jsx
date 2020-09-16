import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
           <div className = "container-fluid nav_bg ">
       <div className = "row">
<div className = "col-12 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid p-0">
    <NavLink className="navbar-brand"  to="/">FamJam</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName = "menu_active"className="nav-link " aria-current="page" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/gallery" activeClassName = "menu_active" >Gallery</NavLink>
        </li> <li className="nav-item">
          <NavLink exact className="nav-link" to="/about" activeClassName = "menu_active" >About</NavLink>
        </li> <li className="nav-item">
          <NavLink exact className="nav-link" to="/date" activeClassName = "menu_active" >Date</NavLink>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
</div>

</div>

</div>
        </>
    );
}
export default Navbar