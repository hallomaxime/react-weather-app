import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div>
          <h1 className="mt-3">{props.data.city}</h1>
          <ul className="current-weather">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex">
            <div>
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
