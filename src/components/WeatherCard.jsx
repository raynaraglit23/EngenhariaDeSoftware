import React from 'react';

export const WeatherCard = ({ data }) => (
  <div>
    <h2>Clima em {data.name}</h2>
    <p>Temperatura: {data.main.temp}°C</p>
    <p>Sensação térmica: {data.main.feels_like}°C</p>
    <p>Umidade: {data.main.humidity}%</p>
    <p>Descrição: {data.weather[0].description}</p>
    <img
      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      alt={data.weather[0].description}
    />
  </div>
);