import React from "react";
import WeatherCardComponent from "../WeatherCardComponent/WeatherCardComponent.jsx";
import { getWindSpeed, getTime } from "../../Utils/weatherUtils.js";

const WeatherComponent = ({ data }) => {
  return (
    <div className="statsBox">
      <WeatherCardComponent
        title={"Humidity"}
        iconSource={"/icons/025-humidity.png"}
        metric={data.main.humidity}
        unit={"%"}
      />
      <WeatherCardComponent
        title={"Wind speed"}
        iconSource={"/icons/017-wind.png"}
        metric={getWindSpeed(data.wind.speed)}
        unit={"m/s"}
      />
      <WeatherCardComponent
        title={"Sunrise"}
        iconSource={"/icons/040-sunrise.png"}
        metric={getTime(data.sys.sunrise, data.timezone)}
      />
      <WeatherCardComponent
        title={"Sunset"}
        iconSource={"/icons/041-sunset.png"}
        metric={getTime(data.sys.sunset, data.timezone)}
      />
    </div>
  );
};

export default WeatherComponent;
