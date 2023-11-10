import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from ".././assets/img/logo.jpg";
import merit from ".././assets/img/merit.JPG";
import ".././assets/dashboard/assets/css/style.css";
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";

function PresidentScreen() {
  const navigate = useNavigate();

  const handlePresident = () => {
    navigate("/1");
  };

  //handlogout functions
  const handleLogout = () => {
    axios
      .post("https://nacos-vote.onrender.com/voters/logout")
      .then((response) => {
        navigate("/login");
        console.log("Logout successful");
        alert("Thank you for voting");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get("https://nacos-vote.onrender.com/candidate/")
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidates", error);
      });
  }, []);

  const [voted, setVoted] = useState(false);

  const handleVote = (candidateName) => {
    if (!voted) {
      axios
        .post("https://nacos-vote.onrender.com/voters/vote", {
          candidate: candidateName,
        })
        .then((response) => {
          console.log("Vote successful");
          setVoted(true);
        })
        .catch((error) => {
          console.error("Vote failed", error);
        });
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

          {/* Add other list items for different positions as needed */}

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

      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <span style={{ color: "green" }}>Pick your president</span>
          </h1>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {candidates.map((candidate) => (
                  <div className="col-md-6" key={candidate.id}>
                    <div
                      className="card mb-3"
                      style={{ width: "100%", height: "auto" }}
                    >
                      <div className="card-body">
                        <div className="col-12">
                          <img
                            src={merit}
                            alt={candidate.firstname}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                          <hr />

                          <p>
                            {candidate.firstname} {candidate.lastname}
                          </p>
                          <hr />

                          <button
                            className="btn btn-primary w-100"
                            name="login"
                            type="submit"
                            style={{
                              backgroundColor: "green",
                            }}
                            onClick={() => handleVote(candidate.firstname)}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright 2023 Avinx Nation | CHOWGOO All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default PresidentScreen;
