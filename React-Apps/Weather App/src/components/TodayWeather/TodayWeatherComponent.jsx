import React from 'react';
import './TodayWeather.css'

const TodayWeatherComponent = ({ currentCity, currentWeather, today }) => {
  
  const {
    main: { temp },
    weather: [{ icon, main, description }]
  } = today;

  return (
    <div className='today-weather'>
      <div className="days-weather">
        <img id='today-icon' src={`./public/images/${icon}.svg`} alt="" />
      </div>
      <div className="today-info">
        <h4 >Today</h4>
        <h2 style={{textTransform : "capitalize"}}>{currentCity}</h2>
        <p>Temperature : {Math.trunc(temp - 273)}&#176;C</p>
        <p style={{textTransform : "capitalize"}}>{description}</p>
      </div>
    </div>
  );
};

export default TodayWeatherComponent;
