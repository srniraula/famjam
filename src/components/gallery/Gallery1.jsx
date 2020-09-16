import React from 'react'
import nnature03 from '../images/nnature03.jpg'
import nnature4 from '../images/nnature4.jpg'
import nnature5 from '../images/nnature5.jpg'
import nnature6 from '../images/nnature6.jpg'
import nnature7 from '../images/nnature7.jpg'
import nnature8 from '../images/nnature8.jpg'
import nnature9 from '../images/nnature9.jpg'
import nnature10 from '../images/nnature10.jpg'
import nnature11 from '../images/nnature11.jpg'
import nature from '../images/nature.jpg'


const Gallery1 = () => {
    return (
        <>
          <main>
          <div className = "container-fluid nav_bg pt-5 pb-5 ">
            <div className = "row">
                <div className = "col-12 mx-auto master">
                  <div className = "small"><img src = {nnature03} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature4} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature5} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature6} className = "img-fluid rounded"  alt = ""/></div>

                  <div className = "small"><img src = {nnature7} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature8} className = "img-fluid rounded" alt = ""/></div>
                  
                  <div className = "small"><img src = {nnature9} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature10} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nnature11} className = "img-fluid rounded" alt = ""/></div>
                  <div className = "small"><img src = {nature} className = "img-fluid rounded" alt = ""/></div>



                </div>

             </div>

          </div>
          </main>
           
        </>
    );
}
export default Gallery1