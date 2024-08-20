import { NavLink } from "react-router-dom";
import "../styles/landing-page.css";
// import { Login } from "../pages/Login.jsx";
export const Navbar = () => {
  return (
    <nav
      className="content"
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease"
    >
      <div className="logo">
        <h3>UrbanAlert</h3>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/how-to-use">How it Works</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="login-register">
        <NavLink
          to="/register"
          className="button light-blue-btn"
          style={{ textDecoration: "none" }}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className="button blue-btn"
          style={{ textDecoration: "none" }}
        >
          Login
        </NavLink>
        {/* <form action="/register">
          <input
            type="submit"
            value="Register"
            className="button light-blue-btn"
          />
        </form>
        <form action="/login">
          <input type="submit" value="Login" className="blue-btn button" />
        </form> */}
      </div>
    </nav>
  );
};
