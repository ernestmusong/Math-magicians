import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

function Home() {
  return (
    <section className="home">
      <div className="contentWrap">
        <h2>Welcome to our page!</h2>
        <p><LoremIpsum p={2} /></p>
      </div>
    </section>
  );
}

export default Home;
