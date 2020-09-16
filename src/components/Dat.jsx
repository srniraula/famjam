import React from 'react'
import '../index.css'
import {NavLink} from 'react-router-dom';


const Dat = () => {
    const date = new Date();
    const month = 8;
    const day = date.getUTCDate();
    let remainingDay = '';
    let warn = '';
 if (month === 8) { remainingDay = 19 - day }
 else { remainingDay = "NO"; warn = "You missed it !!!!. We are already done our trip."}  
  

  

    return (
        <>
        <div className = "container-fluid nav_bg pt-3 date ">
  <div className = "row">
    <div className = "col-12 mx-auto">
        <div>Here, we write our dates(if any) about any visit, trip or tour we are going for at recent upcoming time. </div>
        <div>
            <div>Hey, recently we the FamJam group members are planning to go for  <mark>Picnic</mark> on <strong>Riverside Prakashpur </strong>(meaning <strong>Koshi</strong>).. funny haha(unlike Riverside Pokhara). Here is the date:</div>
            <div>Nepali Date: &nbsp;&nbsp;&nbsp;&nbsp;3<sup>rd</sup> Ashoj, 2077</div> 
            <div>English Date: &nbsp; 19<sup>th</sup> September, 2020</div>
           
        </div><br />
        <p > <strong>{remainingDay}</strong> Days remaining. <span style = {{color:'red'}}>{warn}</span> </p>
        <div>To get updated, please fall along with this page.</div>
     <div>
         <p>If you are <span className = "brand-name">FamJam</span> member and interested, register now here :</p>
         <NavLink to = "/register">Register Now</NavLink>
       
     </div>
    </div>

  </div>

</div>
        </>
    )
}
export default Dat;