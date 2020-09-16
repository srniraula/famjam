import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './components/Home';
import Submit from './Submit';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Dat from './components/Dat';
import Gallery1 from './components/gallery/Gallery1'
import Gallery2 from './components/gallery/Gallery2'
import Gallery3 from './components/gallery/Gallery3'
import Members from './components/footer/Members'
import Dev from './components/footer/Dev'
import Contact from './components/footer/Contact'

import {Switch, Route, Redirect} from 'react-router-dom';
import Register from './components/register/Register';


function App() {
  return (
     <>
    <Navbar />



 <Switch>
   <Route exact path = "/" component = {Home}/>
 <Route exact path = "/gallery" component = {Gallery}/>
 <Route exact path = "/about" component = {About}/>
 <Route exact path = "/date" component = {Dat}/>
 <Route exact path  = "/gallery1" component = {Gallery1} />
 <Route exact path  = "/gallery2" component = {Gallery2}/>
 <Route exact path  = "/gallery3" component = {Gallery3}/>
 <Route exact path =  "/footer/members" component = {Members}/>
 <Route exact path =  "/footer/dev" component = {Dev}/>
 <Route exact path =  "/footer/contact" component = {Contact}/>
 <Route exact path =  "/register" component = {Register}/>
 <Route exact path =  "/submit" component = {Submit}/>

      
   <Redirect to = "/" />
    

 </Switch>


 <Footer />

     </>
  );
}

export default App;
