// import ForgotPassword from "../Login/ForgotPassword";
// import Profile from "../Components/Profile/Profile";
// import Registration from "../Login/Registration";
// import Valid from "../Components/FetchData/Valid";
// import Slider2 from "../Components/Slider/Slider2";
// import ContestRules from "../Components/Contest/ContestRules";
// import Contact from "../Components/Contact/Contact";
// import Vote from "../Components/Vote/Vote";
// import About from "../Components/About/About";
// import EventRegis from "../Components/EventRegis/EventRegis";
// import Time from "../Components/FetchData/Time";
// import UploadPicture from "../Components/UploadPicture/UploadPicture";
// import Contest from "../Components/Contest/Contest";


// const { createBrowserRouter } = require("react-router-dom");
// const { default: Main } = require("../Layout/Main");
// const { default: Home } = require("../Components/Home/Home/Home/Home");
// const { default: Login } = require("../Login/Login");


// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Main/>,
//         children: [
//             {
//                 path: '/event',
//                 element:<Home/>
//             },
//             {
//                 path: '/',
//                 element:<Login/>
//             },
//             {
//                 path: '/profile',
//                 element:<Profile/>
//             },
//             {
//                 path: '/registration',
//                 element:<Registration/>
//             },
//             {
//                 path: '/forgotpassword',
//                 element:<ForgotPassword/>
//             },
//             {
//                 path: '/valid',
//                 element:<Valid/>
//             },
//             {
//                 path: '/eventregis',
//                 element:<EventRegis/>
//             },
//             {
//                 path: '/time',
//                 element:<Time/>
//             },
//             {
//                 path: '/contest',
//                 element:<Contest/>
//             },
//             {
//                 path: '/slider',
//                 element:<Slider2/>
//             },
//             {
//                 path: '/home',
//                 element:<Vote/>
//             },
//             {
//                 path: '/uploadpicture',
//                 element:<UploadPicture/>
//             },
//             {
//                 path: '/contestrules',
//                 element:<ContestRules/>
//             },
//             {
//                 path: '/about',
//                 element:<About/>
//             },
//             {
//                 path: '/contact',
//                 element:<Contact/>
//             },
          
//         ]
//     }
// ]);

// export default router;

import React, { useEffect } from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from '../Components/Shared/Header';
import Footer from '../Components/Shared/Footer';
import Login from '../Login/Login';
import ForgotPassword from "../Login/ForgotPassword";
import Home from '../Components/Home/Home/Home/Home'
import Profile from "../Components/Profile/Profile";
import Registration from "../Login/Registration";
import Valid from "../Components/FetchData/Valid";
import Slider2 from "../Components/Slider/Slider2";
import ContestRules from "../Components/Contest/ContestRules";
import Contact from "../Components/Contact/Contact";
import Vote from "../Components/Vote/Vote";
import About from "../Components/About/About";
import EventRegis from "../Components/EventRegis/EventRegis";
import Time from "../Components/FetchData/Time";
import UploadPicture from "../Components/UploadPicture/UploadPicture";
import Contest from "../Components/Contest/Contest";

const Router = () => {
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
           <Route path='/valid' element={<Valid/>}/>
           <Route path='/slider' element={<Slider2/>}/>
           <Route path='/eventregis' element={<EventRegis/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contestrules' element={<ContestRules/>}/>
           <Route path='/uploadpicture' element={<UploadPicture/>}/>
           <Route path='/home' element={isLogged ? <Vote/> : <Navigate to="/"/>}/>
           <Route path='/contest' element={isLogged ? <Contest/> : <Navigate to="/"/>}/>
           <Route path='/time' element={<Time/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
