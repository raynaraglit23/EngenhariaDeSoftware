import React, { useState } from 'react';
import styles from './App.module.css'; // ➞ IMPORT DO CSS
import CitySearch from './components/CitySearch/CitySearch';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { fetchWeather } from './services/weatherService';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    if (!city) {
      setError('Digite uma cidade.');
      setWeatherData(null);
      return;
    }

    setError('');
    setWeatherData(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch {
      setError('Cidade não encontrada. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Previsão do Tempo</h1>

      <CitySearch onSearch={handleSearch} />

      {/* Exibe erro se existir */}
      <ErrorMessage message={error} />

      {/* Se tiver weatherData, mostra o card; 
          se não tiver e não houver erro, mostra “Sem dados.” */}
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        !error && <p className={styles.noData}>Sem dados.</p>
      )}
    </div>
  );
}
