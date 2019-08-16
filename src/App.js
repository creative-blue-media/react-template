import React from 'react';
import logo from './icon.png';
import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lets CBM this CMS!
        </p>
        <a
          className="App-link"
          href="https://www.creativeblue.media"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBM WEBSITE
        </a>
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
