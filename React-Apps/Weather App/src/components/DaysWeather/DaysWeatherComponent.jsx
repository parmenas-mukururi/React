import React from 'react';
import './DaysWeatherComponent.css'

const getDay = (dt_txt) => {
  let day = new Date(dt_txt).getDay();
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[day];
};

const DaysWeatherComponent = ({ currentWeather }) => {

  const daysWeather = currentWeather.list.filter((item) => {
    let day = new Date(item.dt_txt);
    return (day.getHours() === 0);
  });

  const dailyWeather = daysWeather.slice(1, 5);
  console.log(dailyWeather);
  return (
    <div className='daily-weather'>
      {dailyWeather.map(({ dt, dt_txt, main: { temp }, weather: [{ icon, main, description }] }) => {
        return (
          <div className='daily-weather-item'>
            <p>{getDay(dt_txt)}</p>
            <img src={`/public/images/${icon}.svg`} alt="weather icon" />
            <p>{Math.trunc(temp - 273)}&#176;C</p>
          </div>
        );
      })}
    </div>
  );
};
export default DaysWeatherComponent