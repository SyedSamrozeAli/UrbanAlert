// Import necessary React hooks and libraries
import { useEffect, useState } from "react";
import AOS from "aos"; // Animation on scroll library
import "aos/dist/aos.css"; // AOS styles
import "../styles/login-page.css"; // Custom CSS for the login page
import axios from "axios"; // HTTP client for API requests
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // State to manage form input data
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // Hook to navigate to User Dashboard after succesfull login
  const navigate = useNavigate();

  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to handle input changes
  function handleInput(e) {
    let name = e.target.name; // Get the name attribute of the input
    let value = e.target.value; // Get the value entered in the input

    // Update the state with the new input value
    setData({
      ...data, // Spread the current state
      [name]: value, // Update the specific field in the form data
    });
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Login Data: ", data); // Log the form data

    // Make a POST request to login the user
    axios
      .post("/api/auth/login", data, {
        headers: {
          "Content-Type": "application/json", // Set the request headers
        },
      })
      .then((response) => {
        if (response.success == true) {
          console.log("Login Successfully:", response); // Log the success message

          // Reset the form data
          setData({
            email: "",
            password: "",
          });

          // Navigate to User Dashboard
          navigate("/user/dashboard");
        } else {
          setError(response.data); // Set the error message in case of failure
        }
      })
      .catch((error) => {
        console.log(error); // Log any error that occurs
        setError(error); // Set the error state
      });
  }

  // UseEffect hook to initialize AOS animations on component mount
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
    AOS.refresh(); // Refresh AOS to detect any changes
  }, []);

  return (
    <>
      <style>
        {`
          .form-container {
            gap: 80px;
          }

          .input-box {
            position: relative;
          }

          .input-box input {
            width: 100%;
          }
          
          form {
            width: 40vw;
            gap: 30px;
          }

          form button {
            width: 100%;
          }
        `}
      </style>
      <div className="body">
        <div className="shadow-1"></div> {/* Visual effect shadow */}
        <div className="shadow-2"></div> {/* Visual effect shadow */}
        <div
          className="form-container"
          data-aos="fade-in" // Animation on scroll
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="heading">
            <h1>
              Urban <br />
              <span style={{ visibility: "hidden" }}>i</span> Alert
            </h1>
          </div>
          <h2>Login to your Account</h2>

          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                required
                onChange={handleInput}
              />
              <label>E-mail</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                required
                onChange={handleInput}
              />
              <label>Password</label>
            </div>

            <button type="submit">Login</button>

            {/* Display error message if any */}
            {error && (
              <p style={{ color: "red" }}>
                <i>{error.message}</i>
              </p>
            )}
          </form>

          {/* Social login buttons */}
          <div className="social-login">
            <button className="facebook-btn">
              <i className="fab fa-facebook"></i> Login with Facebook
            </button>
            <button className="google-btn">
              <i className="fab fa-google"></i> Login with Gmail
            </button>
          </div>
        </div>
        <div
          className="side-container"
          data-aos="slide-left" // Animation on scroll
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h2>Report, Resolve, Revitalize</h2>
        </div>
      </div>
    </>
  );
};
