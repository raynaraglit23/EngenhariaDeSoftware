import React from 'react';
import styles from './WeatherCard.module.css';

export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name,
    country,
    latitude,
    longitude,
    main: { temp, feels_like, humidity },
    weather: [first],
  } = data;

  const { description, icon } = first;

  return (
    <div className={styles.card}>
      <h2 className={styles.city}>
        {name}, {country}
      </h2>

      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />

      <p className={styles.temp}>
        {Math.round(temp)}°C{' '}
        <span className={styles.feels}>
          (sensação: {Math.round(feels_like)}°C)
        </span>
      </p>

      <p className={styles.humidity}>Umidade: {humidity}%</p>
      <p className={styles.desc}>{description}</p>

      <p className={styles.coords}>
        <strong>Coordenadas:</strong> {latitude}, {longitude}
      </p>
    </div>
  );
}
