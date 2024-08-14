import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../Components/Navbar";

export const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <section id="about">
        <div
          className="about-container"
          data-aos="slide-up"
          data-aos-offset="20"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-anchor-placement="top-center"
        >
          <h1>What is</h1>
          <h1>UrbanAlert</h1>
          <p>
            UrbanAlert is a platform designed to help citizens report urban
            issues such as potholes, broken streetlights, graffti and more.Our
            gole is to enhance city management by enabling local authorities to
            track,prioritize, and address these problems efficiently
          </p>
          <div className="image-container">
            <img src="/images/about1.jpeg" alt="" />
            <img src="/images/about2.jpeg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
