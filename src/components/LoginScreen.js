import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission behavior

      const voteNumber = document.getElementById("yourPassword").value;

      const response = await fetch(
        "https://nacos-vote.onrender.com/voters/login?voting_number=nt5bgi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            voteNumber: voteNumber,
          }),
        }
      );

      if (response.ok) {
        navigate("/home");
        alert("Login Successful, Please vote well");
      } else {
        alert("Login failed. Please check your vote number and try again");
        console.log("Error during login");
      }
    } catch (error) {
      alert("An error occurred during login. Please try again later.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <span className="d-none d-lg-block">
                        <img
                          src={logo}
                          alt="logo"
                          style={{
                            width: "190%",
                            height: "400px",
                          }}
                        />
                      </span>
                    </a>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Welcome Nacosites
                          </h5>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                          <div className="col-12">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Vote number
                            </label>
                            <input
                              type="password"
                              name="country"
                              className="form-control"
                              id="yourPassword"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter vote number
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              name="login"
                              type="submit"
                              style={{ backgroundColor: "green" }}
                              onClick={handleLogin}
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
