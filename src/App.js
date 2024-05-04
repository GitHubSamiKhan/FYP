import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';


import Sidebar from './Admin_Components/Sidebar';
import Navbar from './Admin_Components/Navbar';
import Dashboard from './Admin_Components/Dashboard';
import Alumni from './Admin_Components/Alumni';
import Gallery from './Admin_Components/Gallery';
import Jobs from './Admin_Components/Jobs';
import Events from './Admin_Components/Events';
import Forum from './Admin_Components/Forum';
import Users from './Admin_Components/Users';
import Site_Setting from './Admin_Components/Site_Setting';
import Login from './Admin_Components/Login';
import Footer from './Admin_Components/Footer';



function Allcomponents() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Function to handle successful login
  // const handleLogin = () => {
  //   // Perform authentication logic here (e.g., API call)
  //   // Set isLoggedIn to true upon successful login
  //   setIsLoggedIn(true);
  // };

  return (

    // <Sidebar />
    // <Navbar />
    // <Dashboard /> 
    //  <Alumni /> 
    //  <Gallery /> 
    //  <Jobs /> 
    //  <Events /> 
    //  <Forum />  
    //  <Users />  
    //  <Footer />  

    ////////////////////////////////
    // /////Routing with login/////////
    // <Router>
    //   {/* <Sidebar />
    //         <Navbar /> */}
    //   <Routes>
    //     {/* Show Login component if not logged in */}
    //     {!isLoggedIn && <Route path="/" element={<Login onLogin={handleLogin} />} />}

    //     {/* Protected routes (visible only when logged in) */}
    //     {isLoggedIn && (
    //       <>

    //         <Route path="/sidebar" element={<Sidebar />} />
    //         <Route path="/navbar" element={<Navbar />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/alumni" element={<Alumni />} />
    //         <Route path="/gallery" element={<Gallery />} />
    //         <Route path="/jobs" element={<Jobs />} />
    //         <Route path="/events" element={<Events />} />
    //         <Route path="/forum" element={<Forum />} />
    //         <Route path="/users" element={<Users />} />
    //         <Route path="/site_setting" element={<Site_Setting />} />
    //         <Route path="/footer" element={<Footer />} />
    //         {/* Add routes for Std Components here when ready */}
    //         {/* <Route path="/student-component" element={<SomeStudentComponent />} /> */}
    //       </>
    //     )}

    //     {/* Redirect to Dashboard after login */}
    //     {isLoggedIn && <Route path="/" element={<Navigate to="/dashboard" />} />}
    //   </Routes>
    //   {/* <Footer /> */}
    // </Router>
    <>
      {/* //////////////////////////////// */}
      {/* // /////Routing without login///////// */}
      <Router>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/users" element={<Users />} />
          <Route path="/site_setting" element={<Site_Setting />} />
          {/*  <Route path="/site_setting" element={<Sign_Out />} />  */}
          {/*  Add routes for Std Components here when ready  */}
          {/*  <Route path="/student-component" element={<SomeStudentComponent />} />  */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Allcomponents;
