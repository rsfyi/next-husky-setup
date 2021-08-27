import { useRouter } from 'next/router';
import Nav from '../components/Nav';

import en from '../locales/en';
import hi from '../locales/hi';

import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === 'en' ? en : hi;

  return (
    <div className={styles.container}>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <h4 className={styles.title}>{t.title}</h4>
      </main>
    </div>
  );
}
