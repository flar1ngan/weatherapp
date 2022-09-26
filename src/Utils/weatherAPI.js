async function weatherAPI(input) {
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  const data = await getWeatherData.json();
  return data;
}

export default weatherAPI;
