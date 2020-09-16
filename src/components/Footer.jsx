import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div className = "container-fluid nav_bg footer-main footer">
            <div className = "row">
                   <div className = "col-10 mx-auto  footer-main-div d-flex justify-content-around align-items-center d-lg-flex flex-column justify-content-lg-around align-items-lg-center flex-lg-row">
                        <div className = "footer-div"><NavLink to = "/footer/members">Members</NavLink></div>
                        <div className = "footer-div"><NavLink to = "/footer/dev">Dev</NavLink></div>
                        <div className = "footer-div"><NavLink to = "/footer/contact">Contact</NavLink></div>
                     </div>
            <div className= "row" >
                   <div className = "copy ">&copy; FamJam</div>

            </div>



             </div>

        </div>
        </>
    )
}
export default Footer;