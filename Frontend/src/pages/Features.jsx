import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../Components/Navbar";

export const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section id="features">
        <div
          className="feature-container"
          data-aos="slide-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="top-center"
        >
          <h1>
            Key <br />
            Features
          </h1>
          <div className="feature-cards">
            <div className="card">
              <img src="/images/users.png" alt="" />
              <h4>User-Friendly Reporting</h4>
              <p>Easily report issues with description,photos and locations</p>
            </div>
            <div className="card">
              <img src="/images/map.png" alt="" />
              <h4>Interactive Mapping</h4>
              <p>Pinpoint eaxct locations on an interactive map</p>
            </div>
            <div className="card">
              <img src="/images/notification.png" alt="" />
              <h4>Rea-Time Notifications</h4>
              <p>Stay updated on the status of your reports</p>
            </div>
            <div className="card">
              <img src="/images/voting.png" alt="" />
              <h4>Community Voting</h4>
              <p>Vote in issues to prioritize the most critical problem</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
