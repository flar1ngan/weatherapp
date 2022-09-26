import React, { useState, useEffect } from "react";
import WeatherComponent from "../../Components/WeatherComponent/WeatherComponent";
import { convertTime } from "../../Utils/weatherUtils";
import weatherAPI from "../../Utils/weatherAPI";
import "./weatherPage.css";
import TopBar from "../../Components/topBar/TopBar";


function WeatherPage() {
  const [input, setInput] = useState("Riga"); // default city
  const [weatherData, setWeatherData] = useState();

  const getData = async () => {
    weatherAPI(input).then((res) => {
      setWeatherData({ ...res });
      setInput("");
    });
  };

  const enterKeydown = (event) => {
    if (event.keyCode === 13) { // enter key
      getData();
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  return weatherData && !weatherData.message ? (
    <>
    <TopBar/>
    <div className="bigWrapper">
    <div className="wrapper">
      <div className="weatherWrapper">
        <h1 className="locationTitle">
          {weatherData.name}, {weatherData.sys.country}
        </h1>

        <p className="weatherDescription">
          {weatherData.weather[0].description}
        </p>
        <img
          alt="weatherIcon"
          src={`/icons/${weatherData.weather[0].icon}.svg`}
          height="300px"
          width="300px"
        ></img>

        <h1 className="mainTemp">{Math.round(weatherData.main.temp)}°C</h1>
        <p>Feels like {Math.round(weatherData.main.feels_like)}°C</p>
      </div>

      <div className="statsWrapper">
        <div className="titleAndSearch">
          <h2 style={{ textAlign: "left" }}>
            {
              weekday[
                new Date(
                  convertTime(weatherData.dt, weatherData.timezone).input
                ).getUTCDay()
              ]
            }
            ,{" "}
            {parseInt(
              convertTime(weatherData.dt, weatherData.timezone)[0].split(":")[0]
            )}
            :00{" "}
          </h2>

          <input
            type="text"
            className="searchInput"
            placeholder="Search"
            value={input}
            onFocus={(e) => {
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              enterKeydown(e);
              e.target.placeholder = "Search";
            }}
          />
        </div>
        <WeatherComponent data={weatherData} />
      </div>
    </div>
    </div>
    </>
  ) : weatherData && weatherData.message ? (
    <>
    <TopBar/>
    <div className="errScr">
      <div>
        <h1 style={{ marginBottom: "30px" }}>
          Couldn't fight the city😿, type again
        </h1>
        <input
          type="text"
          className="searchInput"
          onFocus={(e) => (e.target.value = "")}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            enterKeydown(e);
            e.target.placeholder = "Search";
          }}
        />
      </div>
    </div>
    </>
  )
  : (
    <>
    <TopBar/>
    <div className="errScr">
      <h1>🐈Loading🐈</h1>
    </div>
    </>
  );
}

export default WeatherPage;
