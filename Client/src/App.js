import React, { useEffect } from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Login from './Components/Auth/Login';
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Home from './Components/Home/Home/Home/Home'
import Profile from "./Components/Profile/Profile";
import Registration from "./Components/Auth/Registration";
import Slider2 from "./Components/Slider/Slider2";
import ContestRules from "./Components/Contest/ContestRules";
import Contact from "./Components/Contact/Contact";
import Vote from "./Components/Blog/Vote";
import About from "./Components/About/About";
import Contest from "./Components/Contest/Contest";
import BlogDetails from './Components/Blog/BlogDetails'

function App() {
  const [isLogged, setIsLogged]=useState(false);

  useEffect(()=>{
    const value=JSON.parse(localStorage.getItem('List'));
    if(value===""){
      setIsLogged(false);
    }
    else{
      setIsLogged(true);
    }
  },[])
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path='/' element={isLogged ? <Navigate to="/home"/> : <Login/>}/>
         <Route path='/event' element={isLogged ? <Home/> : <Navigate to="/"/>}/>
         <Route path='/profile' element={isLogged ? <Profile/> : <Navigate to="/"/>}/>
         <Route path='/registration' element={<Registration/>}/>
         <Route path='/forgotpassword' element={<ForgotPassword/>}/>
         <Route path='/slider' element={<Slider2/>}/>
         <Route path='/blog/details/:id' element={<BlogDetails/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contestrules' element={<ContestRules/>}/>
         <Route path='/home' element={isLogged ? <Vote/> : <Navigate to="/"/>}/>
         <Route path='/contest' element={isLogged ? <Contest/> : <Navigate to="/"/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
