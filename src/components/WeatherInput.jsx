// WeatherInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateWeatherStart, updateWeatherSuccess, updateWeatherFailure } from '../store/weatherSlice'

const WeatherInput = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    try {
      dispatch(updateWeatherStart()); // начало загрузки данных о погоде
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=0c7edaee851a4bb2b65143314232907&q=${city}&lang=ru`
      );
      dispatch(updateWeatherSuccess(response.data)); // успешное обновление данных о погоде
    } catch (error) {
      dispatch(updateWeatherFailure('Error fetching weather')); // обработка ошибки
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className='weather-input_box'> 
      <input className='weather-input'
        type="text"
        placeholder="Введите название города"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} className='weather-input'>Show Weather</button>
    </div>
  );
};

export default WeatherInput;
