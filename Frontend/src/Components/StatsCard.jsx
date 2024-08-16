import propTypes from "prop-types";
import { CircularProgressBar } from "./CircularProgressBar";

export const StatsCard = ({ image, heading, sentence, number, total }) => {
  return (
    <>
      <div className="dashboard-card">
        <div className="card-name">
          <img src={image} alt="thumbs up" height={20} />
          <p>{heading}</p>
        </div>
        <div className="card-stats-1">
          <div className="card-number">
            <p>{number}</p>
          </div>
          <p style={{ fontWeight: "600" }}>{sentence}</p>
        </div>
        <div className="card-stats-2">
          <div className="card-total-number">
            <p style={{ color: "#84A98C", fontWeight: "600" }}>
              Out of {total}
            </p>
          </div>
          <div className="progress-circle">
            <CircularProgressBar percentage={(number / total) * 100} />
          </div>
        </div>
      </div>
    </>
  );
};

StatsCard.propTypes = {
  image: propTypes.string,
  heading: propTypes.string,
  sentence: propTypes.string,
  number: propTypes.number,
  total: propTypes.number,
};
