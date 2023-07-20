import React from 'react';
import styles from './FMenu.module.scss';
import { Link } from 'react-router-dom';

export const FMenu = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.name}>Меню</p>
      <div className={styles.column}>
        <div className={styles.aside}>
          <Link className={styles.linkwrap}>Расчёт стоимости</Link>
          <Link className={styles.link}>Услуги</Link>
          <Link className={styles.link}>Виджеты</Link>
          <Link className={styles.link}>Интеграции</Link>
          <Link className={styles.link}>Наши клиенты</Link>
        </div>
        <div className={styles.bside}>
          <Link className={styles.link}>Кейсы</Link>
          <Link className={styles.linkwrap}>Благодарность клиентов</Link>
          <Link className={styles.link}>Сертификаты</Link>
          <Link className={styles.link}>Блог на Youtube</Link>
          <Link className={styles.link}>Вопрос / Ответ</Link>
        </div>
      </div>
    </div>
  );
};
