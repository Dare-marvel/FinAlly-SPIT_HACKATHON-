import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import companyLogo from "../assets/FinAlly_icon.png";
import signin from "../assets/signin.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import { useRef } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"; // Dashboard
import { faBox } from "@fortawesome/free-solid-svg-icons"; // Products
import { faHistory } from "@fortawesome/free-solid-svg-icons"; // History
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"; // Orders
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Logout
import { FaShoppingCart } from "react-icons/fa";
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import axios from "axios";
import "./NavbarStyle.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {faBookOpenReader,faCalculator,faWallet} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let menuRef = useRef();
  const { role, setRole } = props.details;

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMediaIcons(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const logout = async () => {
    let confirmLogout = window.confirm("Are you sure, you want to log out?");
    if (confirmLogout) {
      if (role === "bank") {
        try {
          const res = await axios.post("/banklogout", {
            withCredentials: true,
          });

          if (res.status === 200) {
            toast.info(res.data.msg);
            setRole("visitor");
            navigate("/login");
          }
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error("Some error occured");
          }
        }
      } else if (role === "user") {
        try {
          const res = await axios.post("/userlogout", {
            withCredentials: true,
          });

          if (res.status === 200) {
            toast.info(res.data.msg);
            setRole("visitor");
            navigate("/login");
          }
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error("Some error occured");
          }
        }
      }
    }
  };
  return (
    <>
      <div className="hero" ref={menuRef}>
        <div className="logo">
          <NavLink to="/dbne">
            {" "}
            <div>
              <img
                src={companyLogo}
                alt="Logo Here"
                className="logo1"
                style={{
                  width: "200px",
                  // border: "2px solid red"
                }}
              />
            </div>
          </NavLink>
        </div>
        <div className={showMediaIcons ? "inmobileview itemlist" : "itemlist"}>
          <ul className="List">
            <NavLink
              to="/dbne"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faTachometerAlt} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Dashboard
                </li>
              </div>
            </NavLink>
            <NavLink
              to="/Blogs"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
               <FontAwesomeIcon icon={faBookOpenReader} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Learn
                </li>
              </div>
            </NavLink>
            <NavLink
              to="/MCQ"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faBox} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Quiz
                </li>
              </div>
            </NavLink>

            <NavLink
              to="/Tracker"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <TrackChangesRoundedIcon />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Tracker
                </li>
              </div>
            </NavLink>


            <NavLink
              to="/Calc"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faCalculator} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Calculators
                </li>
              </div>
            </NavLink>
            {/* <NavLink
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "#466bda" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faBox} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Products
                </li>
              </div>
            </NavLink> */}

            {role === "bank" ? (
              <NavLink
                to="/marketplace"
                style={({ isActive }) => ({
                  color: isActive ? "#00b0ff" : "#545e6f",
                  textDecoration: "none",
                  fontWeight: "500",
                  // background: isActive ? '#7600dc' : '#f0f0f0',
                })}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: window.innerWidth <= 768 ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <FaShoppingCart />
                  <li
                    className="listItem"
                    onClick={() => setShowMediaIcons(false)}
                    style={{
                      fontWeight: "600",
                      marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                    }}
                  >
                    Marketplace
                  </li>
                </div>
              </NavLink>
            ) : null}
            {/* <NavLink to="/order-history"
              style={({ isActive }) => ({
                color: isActive ? '#466bda' : '#545e6f',
                textDecoration: 'none',
                fontWeight: '500',
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 768 ? "row" : "column",
                alignItems: "center",
              }}>
                <FontAwesomeIcon icon={faHistory} />
                <li className='listItem' onClick={() => setShowMediaIcons(false)} style={{
                  fontWeight: '600',
                  marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                }}>My Orders</li>
              </div>
            </NavLink> */}
            
            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faUser} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Profile
                </li>
              </div>
            </NavLink>
            <NavLink
              to="/wallet"
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
               <FontAwesomeIcon icon={faWallet} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Wallet
                </li>
              </div>
            </NavLink>
            <NavLink
              onClick={logout}
              style={({ isActive }) => ({
                color: isActive ? "#00b0ff" : "#545e6f",
                textDecoration: "none",
                fontWeight: "500",
                // background: isActive ? '#7600dc' : '#f0f0f0',
              })}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "row" : "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <li
                  className="listItem"
                  onClick={() => setShowMediaIcons(false)}
                  style={{
                    fontWeight: "600",
                    marginLeft: window.innerWidth <= 768 ? "10px" : "0px",
                  }}
                >
                  Logout
                </li>
              </div>
            </NavLink>

            {/* <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noreferrer"><li className='listItem login' onClick={() => setShowMediaIcons(false)}>LOG IN</li></a> */}
          </ul>
        </div>

        <div
          className="hamburger-menu"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <GiHamburgerMenu className="hamburgerlines" />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
