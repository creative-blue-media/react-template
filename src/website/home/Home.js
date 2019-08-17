import React from 'react';
import Card from '../../Card.js';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <section className="container-fluid">
          <div className="row">
            <div className="col-1-of-2">
              <p>
                Social Media Marketing
              </p>
              <button className="btn btn--contact">Contact Us</button>
              <button className="btn btn--learn">Learn More</button>
            </div>
          </div>
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
      <section className="container-fluid info"> 
        <div className="row">
          <div className="col-1-of-3">
            <Card name="Website"/>
          </div>
          <div className="col-1-of-3">
            <Card name="Graphic Design"/>
          </div>
          <div className="col-1-of-3">
            <Card name="Social Networking"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
