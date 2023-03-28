import React, { useState, useEffect } from 'react';
import { FaCircleNotch, FaQuoteLeft } from 'react-icons/fa';
import styles from '../styles/Quotes.module.css';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = '3s3I81LpJxpp0MD46Yqweg==utIo6B2WhXAtvPcj';
  const category = 'happiness';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <div className={styles.wrap}>
        <p className={styles.error}>Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.wrap}>
        <div className={styles.spinner}><FaCircleNotch size={70} /></div>
      </div>
    );
  }

  return (
    <section className={styles.wrap}>
      <div id={styles.box}>
        {data.map((item) => (
          <blockquote key={data.indexOf(item)} className={styles.blockquote}>
            <p className={styles.quote}>
              <FaQuoteLeft size={42} />
              <span id={styles.text}>{item.quote}</span>
            </p>
            <footer>
              <span className={styles.author} style={{ marginRight: '5px' }}>-</span>
              <span className={styles.author}>{item.author}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Quote;
