import React from 'react';
import styles from './Contacts.module.scss';
import {
  BiLogoTelegram,
  BiSolidPhoneCall,
  BiLogoWhatsapp,
} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Contacts = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
