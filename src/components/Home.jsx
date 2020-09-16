import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom';
import ddd from './images/nnature01.jpg';
const Home = () => {
    return (
        <>
        <section id = "header" className = "d-flex align-items-center pb-5 mb-5 ">
            <div className = "container-fluid nav_bg">
                <div className = "row">
                    <div className = "col-12  mx-auto">
                    <div className = "row d-flex align-items-center">
                    <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                        Welcome to the official website of <br /><strong className  = "brand-name">FamJam Group</strong>
                        </h1>
                        <h2 className = "my-1">We just enjoy getting together and chill</h2>
                        <div className = "mt-2">
                            <NavLink to ="/about" className = "btn-get-started" >
                                Get More Info
                            </NavLink>
                        </div>
                        </div>
                    
                    <div className = "col-lg-6 order-1 order-lg-2 m-0">
                    <img src = {ddd} className = "img-fluid rounded" alt = "" />
                 
                            
    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}
export default Home;