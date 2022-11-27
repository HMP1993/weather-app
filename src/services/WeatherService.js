import { DateTime } from "luxon";

const API_KEY = "8e92b13b467afad35c2f32718beeff31";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};
const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formateForecastWeather = (data) => {
  let { timezone, daily, hourely } = data;
  daily.slice(1, 6).map((d) => {});
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formatCurrentWeather;
  const formateForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formateForecastWeather);

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy'  | Local time:  'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
