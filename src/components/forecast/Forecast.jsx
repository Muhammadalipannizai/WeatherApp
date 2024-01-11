import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function Forecast({ data }) {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK.slice(dayInWeek, WEEK.length).concat(
    WEEK.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title"> Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-forecast">
                <label className="days"> {forecastDays[index]} </label>
                  <img
                    alt="forecast-weather"
                    className="icon-forecast"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <span className="temp"> {Math.round(item.main.temp)}°C </span>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">L:
                    {Math.round(item.main.temp_min)}°C / H: {Math.round(item.main.temp_max)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="details-forecast">
                  <div className="details-forecast-items">
                    <label>Pressure</label>
                    <label>{ item.main.pressure} hpa</label>
                  </div>
                  <div className="details-forecast-items">
                    <label>Humidity</label>
                    <label>{ item.main.humidity}%</label>
                  </div>
                  <div className="details-forecast-items">
                    <label>Clouds</label>
                    <label>{ item.clouds.all}</label>
                  </div>
                  <div className="details-forecast-items">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="details-forecast-items">
                    <label>Sea Level </label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="details-forecast-items">
                    <label>Feeels Like</label>
                    <label>{Math.round(item.main.feels_like)} °C</label>
                  </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
