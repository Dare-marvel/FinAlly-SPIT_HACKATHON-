import "./App.css";
import "./css_files/rohit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
// import About from "./components/";
import Signup from "./components/Signup";
// import Logout from './components/Logout';
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import HomeAbout from "./components/AboutUs/HomeAbout";
// import Dashboard from "./Pages/Dashboard";
import Blogs from "./Pages/Blogs";
import MCQ from "./Pages/MCQ";
import Navbar3 from "./components/Navbar3";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Marketplace from "./Pages/Marketplace";
import SearchResult from './Pages/SearchResult';
import Profile from './Pages/CProfile'
import Calc from  './Pages/Calculators'
// import { useContext, useReducer } from 'react';
// import {reducer, initialState} from '../reducer/UserReducer'
import axios from 'axios'
import Dbne from "./Pages/dbne";
import CODB from "./Pages/CODB";


function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [role, setRole] = useState("visitor");
  const getRole = async () => {
    const c = await axios.get('/getrole', {
      withCredentials: true
    });
    setRole(c.data.role)
  }
  useEffect(() => {
    getRole()
  }, [])
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {role === "visitor" && (
        <>
          <Navbar2 />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/homeabout" element={<HomeAbout />}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login details={{ setRole }} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
      {role === "user" && (
        <>
          <Navbar details={{ role, setRole }} />
          <Routes>
            <Route path="/profile" element={< Profile/>} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/MCQ" element={<MCQ />} />
            <Route path="/Calc" element={<Calc />} />
            <Route path="/dbne" element={<Dbne />} />


            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
      {role === "bank" && (
        <>
          <Navbar details={{ role, setRole }} />
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
