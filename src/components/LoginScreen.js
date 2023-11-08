import React from "react";

//import react-router-dom
import { useNavigate } from "react-router-dom";

//import narcos logo
import logo from ".././assets/img/logo.jpg";

//importing css files
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";

//importing vendor files

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
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
                        {/* logo */}
                        <img
                          src={logo}
                          alt="logo"
                          style={{
                            height: 100,
                            width: 100,
                          }}
                        />
                      </span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <form action="" className="mt" method="post">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Welcome Narcosites
                          </h5>
                        </div>

                        <form className="row g-3 needs-validation" novalidate>
                          <div className="col-12">
                            <label for="yourPassword" className="form-label">
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
                              style={{
                                backgroundColor: "green",
                              }}
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
