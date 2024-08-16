import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CircularProgressBar = ({ percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const width = 80;
  const radius = 30;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * animatedPercentage) / 100;

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / percentage), 1);

    const animation = setInterval(() => {
      start += 1;
      setAnimatedPercentage(Math.min(start, percentage));
      if (start >= percentage) {
        clearInterval(animation);
      }
    }, stepTime);

    return () => clearInterval(animation);
  }, [percentage]);

  return (
    <>
      <div>
        <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`}>
          <circle
            cx={width / 2}
            cy={width / 2}
            strokeWidth="5px"
            r={radius}
            className="circle-background"
          />
          <circle
            cx={width / 2}
            cy={width / 2}
            strokeWidth="5px"
            r={radius}
            className="circle-progress"
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              transition: "stroke-dashoffset 0.3s ease",
            }}
            transform={`rotate(-90 ${width / 2} ${width / 2})`}
          />
          <text
            x="50%"
            y="50%"
            dy="0.3em"
            textAnchor="middle"
            className="circle-text"
            style={{ fontWeight: "600" }}
            fill="#2e484b"
          >
            {animatedPercentage}%
          </text>
        </svg>
      </div>
    </>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
