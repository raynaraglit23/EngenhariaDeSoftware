import React from 'react';
import styles from './EmptyState.module.css';

export default function EmptyState({ icon, message }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.text}>{message}</p>
    </div>
  );
}
