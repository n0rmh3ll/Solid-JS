import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.threeBody}>
        <div className={styles.threeBodyDot}></div>
        <div className={styles.threeBodyDot}></div>
        <div className={styles.threeBodyDot}></div>
      </div>
    </div>
  );
}

