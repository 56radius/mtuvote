import React from "react";

//logo
import logo from ".././assets/img/logo.jpg";
import merit from ".././assets/img/merit.JPG";

//import css files
import ".././assets/dashboard/assets/css/style.css";

//import vendor files
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";

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

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span> VICE PRESIDENT </span>
            </a>
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
              <span> FINANCIAL SECRETARY </span>
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
              <span> PUBLIC RELATION OFFICER </span>
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
        </ul>
      </aside>

      {/* main and footer */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            {" "}
            <span style={{ color: "green" }}> Pick your president </span>
          </h1>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              {/* Cards */}
              {/* first picture vote */}
              <div className="card mb-3" style={{ width: 300, height: 500 }}>
                <div className="card-body">
                  <div className="col-12">
                    <img
                      src={merit}
                      alt="merit"
                      style={{
                        width: 260,
                        height: 400,
                        justifyContent: "center",
                        alignItems: "center",
                        left: 0,
                        bottom: 0,
                      }}
                    />

                    <hr />
                    <button
                      className="btn btn-primary w-100"
                      name="login"
                      type="submit"
                      style={{
                        backgroundColor: "green",
                      }}
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>

              {/* Second picture vote */}
              <div className="card mb-3" style={{ width: 300, height: 500 }}>
                <div className="card-body">
                  <div className="col-12">
                    <img
                      src={merit}
                      alt="merit"
                      style={{
                        width: 260,
                        height: 400,
                        justifyContent: "center",
                        alignItems: "center",
                        left: 0,
                        bottom: 0,
                      }}
                    />

                    <hr />
                    <button
                      className="btn btn-primary w-100"
                      name="login"
                      type="submit"
                      style={{
                        backgroundColor: "green",
                      }}
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright 2023 Avinx Nation All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default HomeScreen;
