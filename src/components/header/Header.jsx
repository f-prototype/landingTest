import { Contacts, Logo, Navigation } from './ui';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation />
      <Contacts />
    </div>
  );
};
