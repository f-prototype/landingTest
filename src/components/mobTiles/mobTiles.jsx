import styles from './MobTiles.module.scss';

export const MobTiles = () => {
  return (
    <div className={styles.mobTiles}>
      <div>
        <p>Skype Аудит</p>
        <p>30 виджетов</p>
      </div>
      <div>
        <p>Dashboard</p>
        <p>Месяц аmoCRM</p>
      </div>
    </div>
  );
};
