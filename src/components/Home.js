import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.contentWrap}>
        <h2>Welcome to our page!</h2>
        <p><LoremIpsum p={2} /></p>
      </div>
    </section>
  );
}

export default Home;
