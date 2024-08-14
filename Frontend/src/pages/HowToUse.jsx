import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../Components/Navbar";

export const HowToUse = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <section id="works">
        <div className="works-container first">
          <h1
            data-aos="slide-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="top-center"
          >
            How it <br />
            Works?
          </h1>
          <div
            className="steps-container second"
            data-aos="slide-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="top-center"
          >
            <div className="step-bar bar-1">
              <div
                className="step-no left-bar third"
                style={{
                  backgroundColor: "#ef476f",
                  borderBottom: "6px solid #8b2b41",
                }}
              >
                <p style={{ paddingLeft: "15px" }}>
                  <span style={{ fontSize: "18px" }}>STEP</span> <br />
                  <span style={{ fontSize: "40px" }}>01</span>
                </p>
              </div>
              <div className="step-content step-content-left">
                <h5>Register or Login</h5>
                <p>
                  Create an account or log in using your email or social media
                </p>
              </div>
              <img src="/images/logim.png" alt="login register" height="40" />
            </div>
            <div className="step-bar bar-2">
              <img src="/images/report.png" alt="login register" height="40" />
              <div
                className="step-no right-bar"
                style={{
                  backgroundColor: "#ffd166",
                  borderBottom: "6px solid #836b33",
                }}
              >
                <p style={{ paddingRight: "15px" }}>
                  <span style={{ fontSize: "18px" }}>STEP</span> <br />
                  <span style={{ fontSize: "40px" }}>02</span>
                </p>
              </div>
              <div className="step-content step-content-right">
                <h5>Report an Issue</h5>
                <p>
                  Provide a description, upload photos, and mark the location
                </p>
              </div>
            </div>
            <div className="step-bar bar-1">
              <div
                className="step-no left-bar"
                style={{
                  backgroundColor: "#06d6a0",
                  borderBottom: "6px solid #036d51",
                }}
              >
                <p style={{ paddingLeft: "15px" }}>
                  <span style={{ fontSize: "18px" }}>STEP</span> <br />
                  <span style={{ fontSize: "40px" }}>03</span>
                </p>
              </div>
              <div className="step-content step-content-left">
                <h5>Track and Vote</h5>
                <p>Track your reports and vote on others &apos; reports</p>
              </div>
              <img src="/images/track.png" alt="report an issue" height="40" />
            </div>
            <div className="step-bar">
              <img src="/images/notified.png" alt="get notified" height="40" />
              <div
                className="step-no right-bar"
                style={{
                  backgroundColor: "#118ab2",
                  borderBottom: "6px solid #0a4558",
                }}
              >
                <p style={{ paddingRight: "15px" }}>
                  <span style={{ fontSize: "18px" }}>STEP</span> <br />
                  <span style={{ fontSize: "40px" }}>04</span>
                </p>
              </div>
              <div className="step-content step-content-right">
                <h5>Get Notified</h5>
                <p>Receive updates on the status of your reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
