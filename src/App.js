import "./App.css";
import Search from "./components/search/Search";
import CurrrentWeather from "./components/current-weather/CurrrentWeather";
import { useState } from "react";
import { weatherApi, API_Key } from "./api";
import Forecast from './components/forecast/Forecast';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearch = (searchData) => {
    const [lon, lat] = searchData.value.split(" ");

    const currentFetch = fetch(
      `${weatherApi}/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
    );
    const forecastFetch = fetch(
      `${weatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
    );

    Promise.all([currentFetch, forecastFetch])
      .then(async (response) => {
        const currentResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Search onSearch={handleOnSearch} />
     { currentWeather && <CurrrentWeather data ={currentWeather} />}
     { forecastWeather && <Forecast  data = {forecastWeather}/>}
    </div>
  );
}

export default App;
