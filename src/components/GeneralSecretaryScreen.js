import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import logo from ".././assets/img/logo.jpg";
import ".././assets/dashboard/assets/css/style.css";
import ".././assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";

const MySwal = withReactContent(Swal);

function GeneralSecretaryScreen() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);

    axios
      .get("https://nacos-vote.onrender.com/candidate/") // Replace with your actual backend URL
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching candidates", error);
      });
  }, []);

  // Assuming post 4 is for the General Secretary
  const generalSecretaryCandidates = candidates.filter(
    (candidate) => candidate.post === 4
  );

  const handleVote = (candidateId) => {
    if (candidateId && token) {
      axios
        .post(
          `https://nacos-vote.onrender.com/voters/vote/4/${candidateId}`, // Replace with your actual backend URL
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          MySwal.fire({
            icon: "success",
            title: "Vote Successful",
            text: "Thank you for voting!",
          });
        })
        .catch((error) => {
          console.error("Vote failed", error);
          MySwal.fire({
            icon: "error",
            title: "Vote Failed",
            text: "You've voted on this post, cannot vote again",
          });
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
          <a
            onClick={() => navigate("/home")}
            className="logo d-flex align-items-center"
          >
            <img src={logo} alt="logo" />
            <span className="d-none d-lg-block">
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
              onClick={() => navigate("/1")}
              className="nav-link "
            >
              <i className="bi bi-person"></i>
              <span style={{ color: "green" }}> PRESIDENT </span>
            </button>

            {/* Vice President */}
            <li className="nav-item">
              <button
                style={{ borderWidth: 0, backgroundColor: "#fff" }}
                onClick={() => navigate("/2")}
                className="nav-link "
              >
                <i className="bi bi-person"></i>
                <span> VICE PRESIDENT </span>
              </button>
            </li>

            {/* Financial secretary */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/3")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> FINANCIAL SECRETARY </span>
              </button>
            </li>

            {/* General Secretary */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/4")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> GENERAL SECRETARY </span>
              </button>
            </li>

            {/* Assistant General Secretary */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/5")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> ASST GENERAL SECRETARY </span>
              </button>
            </li>

            {/* PRO screen */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/6")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> PUBLIC RELATION OFFICER </span>
              </button>
            </li>

            {/* Librarian */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/7")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> LIBRARIAN </span>
              </button>
            </li>

            {/* Assistant Librarian */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/8")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> ASSISTANT LIBRARIAN </span>
              </button>
            </li>

            {/* Social Director */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/9")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> SOCIAL DIRECTOR </span>
              </button>
            </li>

            {/* Sport Director */}
            <li className="nav-item">
              <button
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 0,
                }}
                onClick={() => navigate("/10")}
                className="nav-link collapsed"
              >
                <i className="bi bi-person"></i>
                <span> SPORT DIRECTOR </span>
              </button>
            </li>
          </li>

          <li className="nav-item">
            <button
              className="nav-link collapsed"
              style={{
                backgroundColor: "transparent",
                borderWidth: 0,
              }}
              onClick={() => navigate("/")}
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
            <span style={{ color: "green" }}>Pick your General Secretary</span>
          </h1>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {generalSecretaryCandidates.map((candidate) => (
                  <div className="col-md-6" key={candidate.id}>
                    <div
                      className="card mb-3"
                      style={{ width: "100%", height: "auto" }}
                    >
                      <div className="card-body">
                        <div className="col-12">
                          {candidate.image_url ? (
                            <img
                              src={candidate.image_url}
                              alt={`${candidate.firstname} ${candidate.lastname}`}
                              style={{
                                width: "100%",
                                height: "auto",
                              }}
                            />
                          ) : (
                            <p>No image available</p>
                          )}
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
                            onClick={() => handleVote(candidate.id)}
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
          &copy; Copyright 2023 Avinx Nationx All Rights Reserved
        </div>
        <div className="credits"></div>
      </footer>
    </div>
  );
}

export default GeneralSecretaryScreen;
