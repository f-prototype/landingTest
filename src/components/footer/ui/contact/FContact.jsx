import React from 'react';
import {
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiSolidPhoneCall,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './FContact.module.scss';

export const FContact = () => {
  return (
    <div className={styles.contact}>
      <p className={styles.name}>КОНТАКТЫ</p>
      <Link className={styles.link} to="tel:+75555555555">
        +7 555 555-55-55
      </Link>
      <div className={styles.iconsContainer}>
        <Link to="#">
          {' '}
          <BiLogoTelegram className={styles.icon} />
        </Link>
        <Link to="#">
          {' '}
          <BiSolidPhoneCall className={styles.icon} />
        </Link>
        <Link to="#">
          {' '}
          <BiLogoWhatsapp className={styles.icon} />
        </Link>
      </div>
      <p>Москва, Путевой проезд 3с1, к 902</p>
      <div className={styles.desc}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};
