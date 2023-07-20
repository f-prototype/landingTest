import { Tile } from './tile/Tile';
import styles from './Tiles.module.scss';

export const Tiles = () => {
  return (
    <div className={styles.container}>
      <Tile h="Виджеты" desc="30 готовых решений" />
      <Tile h="Dashboard" desc="с показателями вашего бизнеса" />
      <Tile h="Skype Аудит" desc="отдела продаж и CRM системы" />
      <Tile h="35 дней" desc="использования CRM" />
    </div>
  );
};
