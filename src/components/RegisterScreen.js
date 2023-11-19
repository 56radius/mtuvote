import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterScreen() {
  const navigate = useNavigate();
  const [matricNo, setMatricNo] = useState("");

  const handleMatricNo = async () => {
    try {
      const response = await fetch(
        `https://nacos-vote.onrender.com/voters/number/${matricNo}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        const voteNumber = data.data.voter.value;

        // Show the SweetAlert with a loader animation
        Swal.fire({
          title: "Copy Your Vote number",
          text: `Your Vote Number is, ${voteNumber}`,
          icon: "success",
          showCancelButton: false,
          showConfirmButton: true,
          confirmButtonText: "OK",
          allowOutsideClick: false,
          preConfirm: () => {
            // Show the loader animation
            Swal.showLoading();

            // Return a promise that resolves after a delay (simulate asynchronous action)
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 2000); // Adjust the timeout duration as needed
            });
          },
        }).then(() => {
          // Navigate to the login screen after the loader animation
          navigate("/login");
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid matric number. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching data. Please try again.",
        icon: "error",
      });
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
                              Matric No
                            </label>
                            <input
                              type="text"
                              name="matricNo"
                              className="form-control"
                              id="yourPassword"
                              value={matricNo}
                              onChange={(e) => setMatricNo(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter matric no
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              name="login"
                              type="button"
                              style={{ backgroundColor: "green" }}
                              onClick={handleMatricNo}
                            >
                              Get Vote No
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

export default RegisterScreen;
