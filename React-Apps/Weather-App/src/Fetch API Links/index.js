const APIKey = "81ef8b099844079eb7515c62ce63d310"
async function getWeatherData (city) {
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;
const response = await fetch(url);
const data = await response.json();

return data;
}

export {getWeatherData}