import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logoutUser, setCurrentUser } from "../../actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [open, setOpenProfile] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  console.log(userDetails);

  const handleClick = () => setClick(!click);

  const openProfile = () => {
    document.cookie = "connect.sid=;expires=Sat, 20 Jan 1980 12:00:00 UTC";
    console.log(window.innerWidth);
    if (window.innerWidth < 1960) {
      setOpenProfile(!open);
    } else {
      //setOpenProfile(false);
    }
  };
  const openLogout = () => {
    console.log("openLogiut");
  };
  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            CluB
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/pocetna"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Početna
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Događaji
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>

          <div className="profile-container">
            <div className="profile-details">
              {!userDetails.isAuthenticated ? (
                <ul>
                  <li>
                    {" "}
                    <NavLink
                      exact
                      to="/login"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Prijava
                    </NavLink>{" "}
                    |{" "}
                    <NavLink
                      exact
                      to="/registration"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Registracija
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <NavLink
                      exact
                      to="/profile"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      {userDetails.user.displayName}
                    </NavLink>{" "}
                  </li>
                </ul>
              )}
            </div>
            <div className="profile-navigation-icon" onClick={openProfile}>
              <img
                onClick={openLogout}
                src={
                  !userDetails.isAuthenticated
                    ? "https://cdn1.iconfinder.com/data/icons/business-office-and-internet-3-4/48/129-512.png"
                    : userDetails.user.image
                }
                alt=""
              />
            </div>
          </div>

          <nav
            className={
              !open ? "profile-navigation active" : "profile-navigation"
            }
          >
            {!userDetails.isAuthenticated ? (
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/blog"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Prijava
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/blog"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Registracija
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                {" "}
                <li className="nav-links">Profile</li>
                <li className="nav-links">Reservation</li>
                <li className="nav-links" onClick={logout}>
                  Logout
                </li>
              </ul>
            )}
          </nav>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
