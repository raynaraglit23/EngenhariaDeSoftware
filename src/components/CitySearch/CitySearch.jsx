import React, { useState } from 'react';
import styles from './CitySearch.module.css';
import { FaSearch } from 'react-icons/fa';

export default function CitySearch({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city.trim());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
        className={styles.input}
        type="text"
        placeholder="Digite a cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button className={styles.button} type="submit" disabled={!city.trim()}>
        <FaSearch style={{ marginRight: '0.5rem' }} />
        Buscar
        </button>
    </form>
  );
}
