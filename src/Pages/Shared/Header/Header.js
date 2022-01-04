import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SvgButton from "../SvgButton/SvgButton";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  const { user, logout } = useAuth();
  let activeStyle = {
    textDecoration: "none",
    color: "#f15743",
    padding: "5rem 1rem",
  };
  let navLink = {
    color: "rgba(0,0,0,.55)",
    padding: "5rem 1rem",
  };
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div class="logo">
              <a href="/">
                <img
                  src="https://shtheme.org/demosd/roofline/wp-content/uploads/2021/07/logo.png"
                  alt=""
                />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : navLink)}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyle : navLink)}
                  >
                    ABOUT
                  </NavLink>
                  {/* <a className="nav-link" href="/about">
                    ABOUT
                  </a> */}
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    style={({ isActive }) => (isActive ? activeStyle : navLink)}
                  >
                    SERVICE
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => (isActive ? activeStyle : navLink)}
                  >
                    CONTACT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : navLink)}
                    to="/dashboard"
                  >
                    DASHBOARD
                  </NavLink>
                  
                </li>
              </ul>

              {user.email ? (
                <Box>
                  <span style={{ marginRight: "10px", fontWeight: "600" }}>
                    {user.displayName}
                  </span>

                  <SvgButton
                    style={{ color: "#f15743" }}
                    className="banner-description"
                    onClick={logout}
                  >
                    Log out
                  </SvgButton>
                </Box>
              ) : (
                <Link
                  style={{ color: "#f15743", textDecoration: "none" }}
                  to="/login"
                >
                  <SvgButton className="banner-description">Login</SvgButton>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
