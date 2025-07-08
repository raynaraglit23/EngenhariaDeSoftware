import React, { useState } from 'react';
import { fetchWeather } from './services/weatherService';
import { WeatherCard } from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!city) {
      setError('Digite uma cidade.');
      return;
    }

    fetchWeather(city)
      .then(data => {
        setWeatherData(data);
        setError('');
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleSearch}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData ? <WeatherCard data={weatherData} /> : <p>Sem dados.</p>}
    </div>
  );
}

export default App;
