import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    const date = new Date();
    const prevYear = 2018;
    const year = date.getFullYear();
    const timeAfterFormed = year - prevYear;
    return (
        <>
        <div className = "container-fluid nav_bg about">
  <div className = "row">
    <div className = "col-11 mx-auto">
          <p> This is the official website of  <strong>FamJam Group</strong>, where we share  many things 
          from our trips, tour, other knowledge, news, notices and many more info..   </p>
          <p>
          We come from related background (family), and we've been knowing each other since childhood.
           But, this group is formed not long than {timeAfterFormed} years now. </p>
           <p>The first reason I guess for the formation of this group was to be together when going to a marriage ceremony or something in Tarahara.
            Of course, this group was first on <strong style = {{color:"#4267B2"}}>Facebook </strong>
            as a chatting group, formed by our  sister<strong> Nanita Niraula</strong>. There we used to chat about time we get out of our house and get gathered at one place to go to such ceremonies all at one group. That was fun.</p>
           <p>Later, in group  we had fun of course, sharing memes mostly, and teasing other members (friendly teasing), sharing news, views and many more that you can guess of in such group. </p>
           <p>Later, someone from the group, I don't know who exactly let it be anonymous, came up with an idea that we should go for a trip.
         At that point of time, that was unique, I mean no plans such made before and no visit together before. That  time, it was very exciting.
         Everyone was very excited. Tell me who doesn't like to go together trip  with whom they are comfortable talking with and share similar thoughts. </p>
         <p> We went to visit <strong>Koshi Tappu Wildlife Reserve</strong> as per our plan. We had fun. You can check out some glimpses of our first trip here.</p>
           <NavLink to = "/gallery2">Check Out!</NavLink>
          <div style = {{paddingTop:"30px", paddingBottom:"30px"}}>
           <p> 

           This is a private group with few members since we want to be compact and protect our privacy.  
          Go check out members here.</p>
          <NavLink to = "/footer/members">members</NavLink>
          

          </div>
        
         <p>We've been going to visit since then. Our favourite place is Koshi river and surroundings. Haha.. Oh, wait wait, we miss Chatpate too and go for it occasionally. </p> 
    </div>

  </div>

</div>
        </>
    )
}
export default About;