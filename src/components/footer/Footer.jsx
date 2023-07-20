import React from 'react';
import styles from './Footer.module.scss';
import { FAbout, FContact, FMenu } from './ui';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <FAbout />
      <FMenu />
      <FContact />
    </div>
  );
};
