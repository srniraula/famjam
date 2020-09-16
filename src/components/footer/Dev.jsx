import React from 'react'
import photo2 from '../images/photo2.jpg'

const Dev = () => {
    return (
        <>
            <div className = "container-fluid nav_bg pt-5 pb-5">
  <div className = "row">
    <div className = "col-12 mx-auto">
            <p>This website is made by me, a Junior-Web Developer <strong style = {{color:'#15EBE0'}}>Shantiram Niraula </strong>
             who is developing skills as a full-stack developer and in the course of learning tried to make this simple website for fun and practice. The content in the site may not be as accurate but wrote as much and as accurate as I could. </p><p> I know following some of the languages required for the web.</p>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
              
                <ul>
                    <li>Javascript Library: React.js</li>
                    <li>Javascript Framework: Vue.js(little)</li>
                    <li>Javacript Library: jQuery</li>
                    
                </ul>
                <li>PhP</li>
                Learning is never ending process. So, I believe in working on projects while learning regularly as well.
            </ul>
            <p>In course of styling, I know vanilla CSS and the most popular CSS Framework Bootstrap. </p>
            <p>Other than that I have knowledge about RDBMS. I know about MySQL RDBMS and SQL as language for the management of databases(for C.R.U.D operations on data, stands for create, retrieve, update and delete). </p>
            <br />
            <p>If you have any queries about the website, its design, content, styles and also want to build similar websites for business as well as for other works, then you can contact me at: <strong>shantiramniraula012@gmail.com</strong></p>
             <div className = "div-myPic d-flex flex-column justify-content-center align-items-center">
                 <img src = {photo2}  className = " myPic "alt = "not available"/>
                 <p style = {{testAlign:'center'}}>Shantiram Niraula</p>
             </div>
    </div>

  </div>

</div>
        </>
    );
}
export default Dev;