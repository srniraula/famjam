import React from 'react'
import a from '../images/a.jpg'
import b from '../images/picc.jpg'
import c from '../images/c.jpg'
import d from '../images/d.jpg'
import e from '../images/e.jpg'
import f from '../images/f.jpg'
import g from '../images/g.jpg'
import h from '../images/junglee.jpg'

const Gallery2 = () => {
    return (
        <>
 <div className = "container-fluid nav_bg pt-5 pb-5 ">
            <div className = "row">
                <div className = "col-12 mx-auto master-master">
                <img src = {a} className = "img-fluid a"alt = ""/>
                <img src = {b} className = "img-fluid b"alt = ""/>
                <img src = {c} className = "img-fluid c"alt = ""/>
                <img src = {d} className = "img-fluid d"alt = ""/>
                <img src = {e} className = "img-fluid e"alt = ""/>
                <img src = {f} className = "img-fluid f"alt = ""/>
                <img src = {g} className = "img-fluid g"alt = ""/>
                <img src = {h} className = "img-fluid h"alt = ""/>
        </div>
        </div>
        </div>
       
        </>
    );
}
export default Gallery2