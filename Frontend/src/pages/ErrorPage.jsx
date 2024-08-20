import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

export const ErrorPage = (props) => {
  return (
    <>
      <section className="error-container">
        <h1 className="error-heading">Error 404</h1>
        <p>
          <i>The page you are looking for is unavailable</i>
        </p>
        <NavLink to={props.link} className="error-button">
          Go to Homepage
        </NavLink>
      </section>
    </>
  );
};

ErrorPage.propTypes = {
  link: propTypes.string.isRequired,
};
