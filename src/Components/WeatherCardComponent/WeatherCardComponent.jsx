import React from "react";

const WeatherCardComponent = ({ title, iconSource, metric, unit = "" }) => {
  return (
    <div className="statsCard">
      <p>{title}</p>
      <div className="statsCardContent">
        <img src={iconSource} alt="weatherIcon" height="100px" width="100px" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCardComponent;
