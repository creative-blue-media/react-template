import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      <div class="row">
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
              <Link to="/contact/">Conact</Link>
            </li>
          </ul>
        </nav>

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