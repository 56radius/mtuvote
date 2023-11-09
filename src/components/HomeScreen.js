import React, { useState } from "react";

//axios
import axios from "axios";

//logo
import logo from ".././assets/img/logo.jpg";
import merit from ".././assets/img/merit.JPG";

//import css files
import ".././assets/dashboard/assets/css/style.css";

//import vendor files
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";

function HomeScreen() {
  //votng functions
  const [voted, setVoted] = useState(false);

  const handleVote = (candidateName) => {
    if (!voted) {
      // Make a POST request to the voting API
      axios
        .post("https://nacos-vote.onrender.com/voters/vote", {
          candidate: candidateName,
        })
        .then((response) => {
          // Handle a successful vote
          console.log("Vote successful");
          // Update the state to reflect that the user has voted
          setVoted(true);
        })
        .catch((error) => {
          // Handle errors, e.g., display an error message to the user
          console.error("Vote failed", error);
        });
    } else {
    }
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
              <span> FINANCIAL SECRETARY </span>
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
        </ul>
      </aside>

      {/* main and footer */}
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>Pick your president</span>
          </h1>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              {/* Cards - Display side by side using Bootstrap's grid system */}
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="card mb-3"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <div className="card-body">
                      <div className="col-12">
                        <img
                          src={merit}
                          alt="merit"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <hr />

                        <p> Merit Mohammed </p>
                        <hr />

                        <button
                          className="btn btn-primary w-100"
                          name="login"
                          type="submit"
                          style={{
                            backgroundColor: "green",
                          }}
                          onClick={() => handleVote("Merit Mohammed")}
                        >
                          Vote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card mb-3"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <div className="card-body">
                      <div className="col-12">
                        <img
                          src={merit}
                          alt="merit"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <hr />

                        <p> Sodeeq </p>

                        <hr />
                        <button
                          className="btn btn-primary w-100"
                          name="login"
                          type="submit"
                          style={{
                            backgroundColor: "green",
                          }}
                          onClick={() => handleVote("Sodeeq")}
                        >
                          Vote
                        </button>
                      </div>
                    </div>
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
          &copy; Copyright 2023 Avinx Nation | CHOWGOO All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default HomeScreen;
