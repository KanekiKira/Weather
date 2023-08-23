// WeatherCard.js
import React from 'react';
import { useSelector } from 'react-redux';
import '../WeatherCard.css'; 

const WeatherCard = () => {
  const weather = useSelector((state) => state.weather);

  if (weather.loading) {
    return <div>Loading...</div>;
  }

  if (weather.error) {
    return <div className="error">Error: {weather.error}</div>;
  }

  if (weather.data) {
    const { location, current } = weather.data;

    return (
      <div className="weather-card">
        <h2>Погода в {location.name}</h2>
        <div>Температура: {current.temp_c} °C</div>
        <div>Состояние: {current.condition.text}</div>
        <img src={current.condition.icon} alt="Weather Icon" />
      </div>
    );
  }

  return null;
};

export default WeatherCard;
