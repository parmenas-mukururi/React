import { useState, useEffect } from 'react'
import './App.css'
import TodayWeatherComponent from './components/TodayWeather/TodayWeatherComponent.jsx';
import DaysWeatherComponent from './components/DaysWeather/DaysWeatherComponent.jsx'
import SearchBoxComponent from './components/SearchBox/SearchBoxComponent.jsx'
import { getWeatherData } from './Fetch API links';


function App() {
  const [search, setSearch] = useState("");
  const [currentCity, setcurrentCity] = useState("Nyeri");
  const [currentWeather, setcurrentWeather] = useState({
    list: []
  });

  const [today, settoday] = useState({
    main:{ temp: 0},
    weather: [{ icon: "", main: "", description: "" }]
  })

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setcurrentCity(search);
    }
  }

  useEffect(() => {
    console.log('Hello world')
  }, [])

  useEffect(() => {
    getWeatherData(currentCity)
      .then((data) => {
        console.log('Data ', data.list[0])
        settoday(data.list[0])
        setcurrentWeather(data);
      })
  }, [currentCity])
  console.log(currentCity);
  console.log(currentWeather)

  return (
    <>
      <SearchBoxComponent
        search={search}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown} />

      <TodayWeatherComponent
        currentCity={currentCity}
        currentWeather={currentWeather}
        today={today}
      />
      <DaysWeatherComponent
        currentWeather={currentWeather} />

    </>
  )
}

export default App
