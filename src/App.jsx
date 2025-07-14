import React, { useState } from 'react';
import styles from './App.module.css';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherCard from './components/WeatherCard/WeatherCard';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import EmptyState from './components/EmptyState/EmptyState';
import { fetchWeather } from './services/weatherService';
import './styles/variables.module.css';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    if (!city) {
      setError('Digite uma cidade.');
      setWeatherData(null);
      return;
    }

    setError('');
    setWeatherData(null);
    setLoading(true);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch {
      setError('Cidade não encontrada. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Previsão do Tempo</h1>

      <CitySearch onSearch={handleSearch} />
      <ErrorMessage message={error} />
      {loading && <LoadingSpinner />}

      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        !error && (
          <EmptyState
            icon="🔍"
            message="Digite o nome de uma cidade acima para começar!"
          />
        )
      )}
    </div>
  );
}