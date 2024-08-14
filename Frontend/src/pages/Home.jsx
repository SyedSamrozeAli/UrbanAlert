import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <section
        id="home"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        <div className="bg-img">
          <div className="home-container">
            <div
              className="content"
              data-aos="slide-up"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1>UrbanAlert</h1>
              <h3>
                <i>&quot;Report, Resolve, Revitalize&quot;</i>
              </h3>
              <p style={{ marginTop: "10px" }}>
                Join us in making our city better,one report at a time
              </p>
            </div>
            <div className="buttons-container">
              <button id="report" className="button light-blue-btn">
                Report an issue
              </button>
              <button id="learn" className="blue-btn button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
