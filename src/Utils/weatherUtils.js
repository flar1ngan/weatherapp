export const getWindSpeed = (windInMph) => windInMph;

export const convertTime = (unixSeconds, timezone) => {
  const time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/);

  return time;
};

export const getTime = (currentTime, timezone) =>
  `${parseInt(convertTime(currentTime, timezone)[0].split(":")[0])}:${
    convertTime(currentTime, timezone)[0].split(":")[1]
  }`;
