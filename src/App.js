import React from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherInput from './components/WeatherInput';
const App = () => {
  return (
    <div>
      <WeatherInput />
      <WeatherCard />
    </div>
  );
};

export default App;
