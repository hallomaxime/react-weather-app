import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [temp, setTemp] = useState({});

  function showTemp(response) {
    setLoaded(true);
    setTemp({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemp);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={changeCity}
        placeholder="Enter a city..."
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <ul>
        <li>{form}</li>
        <br />
        <li>Temperature: {Math.round(temp.temperature)}°C</li>
        <li>Humidity: {temp.humidity} %</li>
        <li>Windspeed: {Math.round(temp.wind)} km/h</li>
        <li>Description: {temp.description}</li>
        <li>
          <img src={temp.icon} alt={temp.description} />
        </li>
      </ul>
    );
  } else {
    return form;
  }
}
