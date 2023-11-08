import React from "react";

//logo
import logo from ".././assets/img/logo.jpg";

//import css files
import ".././assets/dashboard/assets/css/style.css";

//import vendor files
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";

function HomeScreen() {
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
            <a className="nav-link " href="dashboard.php">
              <i className="bi bi-grid"></i>
              <span style={{ color: "green" }}> PRESIDENT </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default HomeScreen;
