import React from 'react';
import styles from './Tile.module.scss';

export const Tile = ({ h, desc }) => {
  return (
    <div className={styles.tile}>
      <p className={styles.h}>{h}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
