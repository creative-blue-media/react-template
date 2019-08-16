import React from 'react';
import Card from '../../Card.js';
import Navigation from '../navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <section className="container">
          <p>
            Social Media Marketing
          </p>
        </section>
        {/* <a
          className="App-link"
          href="https://www.creativeblue.media"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBM WEBSITE
        </a> */}
      </header>
      <section class="row"> 
        <Card name="Website"/>
        <Card name="Graphic Design"/>
        <Card name="Social Networking"/>
      </section>
    </div>
  );
}

export default App;
