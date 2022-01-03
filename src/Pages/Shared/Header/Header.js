import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SvgButton from "../SvgButton/SvgButton";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();

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
                  <a className="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    SERVICE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    CONTACT
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link">
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
