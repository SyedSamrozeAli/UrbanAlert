import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <section id="footer">
        <div className="bg-img">
          <div className="content">
            <h1
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-anchor-placement="top-center"
            >
              Join the <br />
              UrbanAlert Community
            </h1>
            <h2>
              <i>Start making the difference today</i>
            </h2>
            <button className="button blue-btn">Get Started</button>
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <div className="footer-nav-links">
              <div className="logo">
                <h3>UrbanAlert</h3>
              </div>
              <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/howToUse">How it Works</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                support@urbanalert.com
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Phone :</span>
                021-xxxxxxx
              </p>
              <div className="social-links">
                <NavLink
                  to="https://www.facebook.com"
                  target="_blank"
                  title="Facebook"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-facebook" style={{ color: "black" }}></i>
                </NavLink>
                <NavLink
                  to="https://www.twitter.com"
                  target="_blank"
                  title="Twitter"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-twitter" style={{ color: "black" }}></i>
                </NavLink>
                <NavLink
                  to="https://www.youtube.com"
                  target="_blank"
                  title="YouTube"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-youtube" style={{ color: "black" }}></i>
                </NavLink>
                <NavLink
                  to="https://www.linkedin.com"
                  target="_blank"
                  title="LinkedIn"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-linkedin" style={{ color: "black" }}></i>
                </NavLink>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
