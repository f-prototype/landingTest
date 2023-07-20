import React from 'react';
import logo from '../../../../img/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.text}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};
