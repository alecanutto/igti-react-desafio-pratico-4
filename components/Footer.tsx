import styles from '../styles/Home.module.css';

export default function Footer(props: { description: string }) {
  const { description } = props;
  return (
    <footer className={styles.footer}>
      Powered by <span className={styles.logo}>{description}</span>
    </footer>
  );
}
