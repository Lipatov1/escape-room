import styles from './spinner.module.css';

const Spinner = (): JSX.Element => (
  <div className={styles.spinner}>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
