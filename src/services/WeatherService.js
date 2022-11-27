const API_KEY = "8e92b13b467afad35c2f32718beeff31";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {

    const url = new URL(BASE_URL +'/'+ infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then((res) => res.json())
};
const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData ('weather', searchParams).then()
}