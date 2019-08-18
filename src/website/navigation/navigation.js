import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './navigation.css';
import Index from '../home/Home';


function About() {
  return <h2>About</h2>;
}

function Services() {
  return <h2>Services</h2>;
}

function Work() {
  return <h2>Work</h2>;
}

function Insight() {
  return <h2>Insight</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function WebsiteRouter() {
  return (
    <Router>

      <div className="container-fluid bg navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Services</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Work</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Insight</a></li>
            <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
          </ul>
        </nav>
        {/* <div className="row">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/services/">Services</Link>
              </li>
              <li>
                <Link to="/work/">Work</Link>
              </li>
              <li>
                <Link to="/insight/">Insight</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div> */}
  
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/services/" component={Services} />
        <Route path="/work/" component={Work} />
        <Route path="/insight/" component={Insight} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default WebsiteRouter;