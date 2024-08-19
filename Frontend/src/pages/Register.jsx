// Import necessary hooks and libraries
import { useEffect, useState } from "react";
import AOS from "aos"; // Library for animations on scroll
import "aos/dist/aos.css"; // Import AOS styles
import "../styles/login-page.css"; // Custom CSS for the login page
import axios from "axios"; // HTTP client for making requests
import { useNavigate } from "react-router-dom"; // Hook for navigation
import { toast } from "react-toastify";

export const Register = () => {
  // State to manage form input data
  const [data, setData] = useState({
    lName: "", // Last Name
    fName: "", // First Name
    username: "", // Username
    contact: "", // Contact information
    address: "", // Address
    email: "", // Email address
    password: "", // Password
  });

  // State to manage error messages
  const [error, setError] = useState(null);

  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Function to handle input changes
  function handleInput(e) {
    // Get the name attribute of the input
    let name = e.target.name;

    // Get the value entered in the input
    let value = e.target.value;

    // Update the data state with the new input value
    setData({
      ...data, // Spread the current state
      [name]: value, // Update the specific field in the form data
    });
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Registration Data: ", data); // Log the form data

    // Make a POST request to register the user
    axios
      .post("/api/auth/register", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json", // Set the request headers
        },
      })
      .then((response) => {
        // If registration is successful
        if (response.data.success === true) {
          console.log("Registered Successfully:", response.data); // Log the success message

          // Reset the form data
          setData({
            lName: "",
            fName: "",
            username: "",
            contact: "",
            address: "",
            email: "",
            password: "",
          });

          const successToast = toast.success("User Registered in Successfully");
          toast.update(successToast, {
            autoClose: 1500,
          });

          // Navigate to the login page
          navigate("/login");
        } else {
          // Set the error message in case of failure
          setError(response.data);
          console.log("Error: ", response.data);
          const errorToast = toast.error(response.data.message);
          toast.update(errorToast, {
            position: "top-left",
          });
        }
      })
      .catch((error) => {
        // Catch and set any error that occurs during the request
        setError(error);
        const errorToast = toast.error(error.message);
        toast.update(errorToast, {
          position: "top-left",
        });
      });
  }

  // UseEffect hook to initialize AOS animations on component mount
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
    AOS.refresh(); // Refresh AOS to detect any changes
  }, []);

  // Render the registration form
  return (
    <>
      <style>
        {`
          /* CSS for various elements on the page */
          .heading h1 {
            right: -76px;
          }

          .hello {
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 20px;
          }

          .social-login {
            width: 32vw;
          }

          .social-login button {
            padding: 10px 30px;
          }

          .shadow-1::after {
            box-shadow: 0px 0px 191px 85px #071952;
            left: 0;
            top: 0;
            border-radius: 50%;
            width: 100px;
          }

          .shadow-2::after {
            box-shadow: 0px 0px 191px 90px #cde8e5;
            left: 0;
            bottom: 0;
            border-radius: 50%;
            width: 100px;
          }
        `}
      </style>

      <div className="body">
        {/* Two divs with shadows for visual effects */}
        <div className="shadow-1" style={{ borderRadius: "50%" }}></div>
        <div className="shadow-2" style={{ borderRadius: "50%" }}></div>

        {/* Container for the form and some text */}
        <div className="hello">
          <div
            className="side-container"
            data-aos="slide-right" // Animation on scroll
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <h2>Report, Resolve, Revitalize</h2>
          </div>
          <div
            className="heading side-container"
            data-aos="slide-right" // Animation on scroll
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            style={{ zIndex: "20" }}
          >
            <h1>
              Urban <br />
              <span style={{ visibility: "hidden" }}>i</span> Alert
            </h1>
          </div>
        </div>

        {/* Form container with animations */}
        <div
          className="form-container"
          data-aos="slide-left" // Animation on scroll
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          style={{ borderRadius: "40px 0px 0px 40px" }}
        >
          <h2>Register your Account</h2>

          {/* Registration form */}
          <form onSubmit={handleSubmit}>
            <div className="grid-container">
              {/* Input for first name */}
              <div className="input-box">
                <input
                  type="text"
                  name="fName"
                  required
                  onChange={handleInput}
                />
                <label>First Name</label>
              </div>

              {/* Input for last name */}
              <div className="input-box">
                <input
                  type="text"
                  name="lName"
                  required
                  onChange={handleInput}
                />
                <label>Last Name</label>
              </div>

              {/* Input for username */}
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  required
                  onChange={handleInput}
                />
                <label>Username</label>
              </div>

              {/* Input for contact information */}
              <div className="input-box">
                <input
                  type="text"
                  name="contact"
                  required
                  onChange={handleInput}
                />
                <label>Contact</label>
              </div>
            </div>

            {/* Input for address */}
            <div className="input-box">
              <input
                type="text"
                name="address"
                required
                onChange={handleInput}
              />
              <label>Address</label>
            </div>

            {/* Input for email */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                required
                onChange={handleInput}
              />
              <label>E-mail</label>
            </div>

            {/* Input for password */}
            <div className="input-box">
              <input
                type="password"
                name="password"
                required
                onChange={handleInput}
              />
              <label>Password</label>
            </div>

            {/* Submit button */}
            <button type="submit">Register</button>
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
      </div>
    </>
  );
};
