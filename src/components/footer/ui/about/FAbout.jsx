import React from 'react';
import styles from './FAbout.module.scss';
import { Link } from 'react-router-dom';

export const FAbout = () => {
  return (
    <div className={styles.about}>
      <p className={styles.name}>О компании</p>
      <Link className={styles.link}>Партнёрская программа</Link>
      <Link className={styles.link}>Вакансии</Link>
    </div>
  );
};
