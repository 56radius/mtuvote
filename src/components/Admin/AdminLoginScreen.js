import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//importing css code
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";

//importing image
import logo from "../../assets/img/logo.jpg";

function AdminLoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://nacos-vote.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.data;

        // Store the token in local storage
        localStorage.setItem("adminAuthToken", token);

        // Redirect to the register screen
        navigate("/register");

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome, Admin!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid Username or Password.",
        });
        console.log("Error during admin login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred during login. Please try again later.",
      });
      console.error("Error during admin login:", error);
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
                            height: "400%",
                          }}
                        />
                      </span>
                    </a>
                  </div>
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        {/* Welcoming admin text */}
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Welcome Admin
                          </h5>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                          {/* admin username */}
                          <div className="col-12">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourPassword"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter a username
                            </div>
                          </div>

                          {/* admin password */}
                          <div className="col-12">
                            <label
                              htmlFor="yourPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter a password
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              name="login"
                              type="button"
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

export default AdminLoginScreen;
