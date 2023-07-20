import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link to="#">Услуги</Link>
      <Link to="#">Виджеты</Link>
      <Link to="#">Интеграции</Link>
      <Link to="#">Кейсы</Link>
      <Link to="#">Сертификаты</Link>
    </div>
  );
};
