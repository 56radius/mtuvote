import React from "react";
//import axios from "axios";

import { useNavigate } from "react-router-dom";

//logo
import logo from ".././assets/img/logo.jpg";

//import css files
import ".././assets/dashboard/assets/css/style.css";

//import vendor files
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";

function HomeScreen() {
  const navigate = useNavigate();

  //president
  const handlePresident = () => {
    navigate("/1");
  };

  //handling vice president
  const handleVicepresident = () => {
    navigate("/2");
  };

  //handling financial secretary
  const handleFinancialSecretary = () => {
    navigate("/3");
  };

  //handlogout functions
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("authToken");

    // Redirect to the login sczreen
    navigate("/");
  };

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={logo} alt="logo" />
            <span className="d-none d-lg-block">
              {" "}
              <span style={{ color: "green", listStyle: "none" }}>
                {" "}
                NACOS VOTE{" "}
              </span>
            </span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <nav className="header-nav ms-auto"></nav>
      </header>

      {/* aside */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <button
              style={{ borderWidth: 0, backgroundColor: "#fff" }}
              onClick={handlePresident}
              className="nav-link "
            >
              <i className="bi bi-person"></i>
              <span style={{ color: "green" }}> PRESIDENT </span>
            </button>
          </li>

          <li className="nav-item">
            <button
              style={{
                backgroundColor: "#fff",
                borderWidth: 0,
              }}
              onClick={handleVicepresident}
              className="nav-link collapsed"
            >
              <i className="bi bi-person"></i>
              <span> VICE PRESIDENT </span>
            </button>
          </li>

          <li className="nav-item">
            <button
              style={{
                backgroundColor: "#fff",
                borderWidth: 0,
              }}
              onClick={handleFinancialSecretary}
              className="nav-link collapsed"
            >
              <i className="bi bi-person"></i>
              <span> FINANCIAL SECRETARY </span>
            </button>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> GENERAL SECRETARY </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> ASST GENERAL SECRETARY </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> PUBLIC RELATION OFFICER </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> LIBRARIAN </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> ASST LIBRARIAN </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> SOCIAL DIRECTOR </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> SPORT DIRECTOR </span>
            </a>
          </li>

          {/* Log out */}
          <li className="nav-item">
            <button
              className="nav-link collapsed"
              style={{
                backgroundColor: "transparent",
                borderWidth: 0,
              }}
              onClick={handleLogout}
            >
              <i className="bi bi-person"></i>
              <span> LOG OUT </span>
            </button>
          </li>
        </ul>
      </aside>

      {/* main and footer */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}> Welcome To Nacos Vote </span>
          </h1>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              {/* Cards - Display side by side using Bootstrap's grid system */}
              <p> Please vote well </p>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright 2023 Avinx Nation | CHOWGOO All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default HomeScreen;
