import { Tiles } from '../../components/tiles/Tiles';
import { MobTiles } from '../../components/mobTiles/mobTiles';
import styles from './Homepage.module.scss';

export const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <p className={styles.upperText}>Зарабатывай больше</p>
        <p className={`${styles.upperText} ${styles.gradient}`}>с WELBEX</p>
        <p className={styles.text}>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.bside}>
        <p>
          Вместе с <span className={styles.gradientText}>бесплатной</span>
          <span className={styles.gradientText}> консультацией</span> мы дарим:
        </p>
        <Tiles />
        <button className={styles.btn}>Получить консультацию</button>
        <MobTiles />
      </div>
    </div>
  );
};
